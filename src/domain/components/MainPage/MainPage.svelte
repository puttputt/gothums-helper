<script lang="ts">
	import { web3Store } from '@store/web3';
	import type { GumResult } from '@domain/models/GumResult';
	import { getGothumIds, getLastTrickOrTreated } from '@services/gothums';
	import ToTForm from '../ToTForm/ToTForm.svelte';
	import Gothum from '../Gothum';
	import Instructions from '../Instructions';
	import { getGothum, getGothums } from '@services/gothums-api';
	import { gumStore, loadGums, writeGums } from '@store/gum';
	import { get } from 'svelte/store';
	import Footer from '../Footer';

	let gothums = [] as GumResult[];
	let time = {};
	let loading = true;

	web3Store.subscribe(async (store) => {
		if (!store.connected) return;

		loadGums();
		const ids = await getGothumIds(store.accounts[0]); //big boy '0xc4b426520ea2cace98950d77801b416e886afc1a'

		let gums = get(gumStore);
		if (gums.length !== ids.length) {
			gums = await getGothums(ids);
			gums ? writeGums(gums) : null;
			gums ? gumStore.set(gums) : null;
		}

		gumStore.subscribe(async (gums: GumResult[]) => {
			loading = false;

			let times = await Promise.all(
				ids.map(async (id) => {
					return { id: id.toNumber(), last: await getLastTrickOrTreated(id.toNumber()) };
				})
			);
			time = times.reduce((map, obj) => {
				map[obj.id] = obj.last.toNumber();
				return map;
			}, {});

			gothums = gums.map((g) => {
				g.last = time[g.id];
				return g;
			});
			console.log(gothums);
		});
	});
</script>

<div class="container">
	<div class="content">
		<Instructions />
		<ToTForm {gothums} />

		<div class="gothum-list">
			{#if loading}
				<h3>Loading Gums</h3>
			{/if}
			{#each gothums as gothum}
				<Gothum {gothum} />
			{/each}
		</div>
	</div>

	<Footer />
</div>

<style>
	.container {
		background-color: #191919;
		max-width: 1280px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url('/img/dungeon_brick.png');
		background-repeat: no-repeat;
		image-rendering: pixelated;
		background-position-x: center;
		padding: 12px;
		min-height: 820px;
		/* min-width: 1280px; */
	}
	.gothum-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
