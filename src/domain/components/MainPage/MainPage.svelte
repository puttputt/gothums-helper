<script lang="ts">
	import { web3Store } from '@store';
	import ConnectButton from '@domain/components/ConnectButton';
	import type { GumResult } from '@domain/models/GumResult';
	import { balanceOf, getGothum, getGothumIds, getLastTrickOrTreated } from '@services/gothums';
	import { get } from 'svelte/store';
	import { id } from 'ethers/lib/utils';
	import ToTForm from '../ToTForm/ToTForm.svelte';
	import Gothum from '../Gothum';

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

{#if !$web3Store.connected}
	<ConnectButton />
{/if}

<div>
	{#each gothums as gothum}
		<Gothum {gothum} />
	{/each}
</div>

<ToTForm {gothums} />
