<script type="ts">
	import { formatTime, gothumReadyAt, isGothumReady } from '@utils/time';

	import { intervalToDuration } from 'date-fns';
	import { onMount } from 'svelte';

	export let gothum;

	let now = new Date();
	let time = intervalToDuration({
		start: now,
		end: gothumReadyAt(gothum)
	});

	let ready = false;

	onMount(() => {
		const interval = setInterval(() => {
			now = new Date();
			time = intervalToDuration({
				start: now,
				end: gothumReadyAt(gothum)
			});

			ready = isGothumReady(gothum);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{#if ready}
	<span class="ready">READY</span>
{:else}
	<span class="not-ready">{formatTime(time)}</span>
{/if}

<style>
	.ready {
		padding: 4px 8px 4px 8px;
		border-radius: 1px;
		border: 1px solid;
		border-color: white;
		background-color: darkolivegreen;
		color: white;
		font-size: x-large;
	}

	.not-ready {
		padding: 4px 8px 4px 8px;
		border-radius: 0px;
		border: 1px solid;
		border-color: white;
		background-color: crimson;
		color: white;
		font-size: x-large;
	}
</style>
