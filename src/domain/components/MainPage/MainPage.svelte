<script lang="ts">
	import { web3Store } from '@store';
	import type { GumResult } from '@domain/models/GumResult';
	import { getGothum, getGothumIds, getLastTrickOrTreated } from '@services/gothums';
	import ToTForm from '../ToTForm/ToTForm.svelte';
	import Gothum from '../Gothum';
	import Instructions from '../Instructions';

	let gothums = [] as GumResult[];
	let time = {};

	web3Store.subscribe(async (store) => {
		if (!store.connected) return;

		const ids = await getGothumIds(store.accounts[0]);
		let gums = await Promise.all(ids.map(async (id) => await getGothum(id.toNumber())));
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
</script>

<div class="container">
	<div class="content">
		<Instructions />
		<ToTForm {gothums} />

		<div class="gothum-list">
			{#each gothums as gothum}
				<Gothum {gothum} />
			{/each}
		</div>
	</div>
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
		background-image: url('img/dungeon_brick3.ff541d04.png');
		background-repeat: no-repeat;
		image-rendering: pixelated;
		background-position-x: center;
		background-position-y: -330 px;
		min-height: 820px;
		min-width: 1280px;
	}
	.gothum-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
