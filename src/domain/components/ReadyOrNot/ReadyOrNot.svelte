<script type="ts">
	import { gothumLastTrickOrTreatedAt, gothumReadyAt, isGothumReady } from '@utils/time';

	import { formatDuration, intervalToDuration, subSeconds, addSeconds } from 'date-fns';

	export let gothum;

	let time;

	$: time = formatDuration(
		intervalToDuration({
			start: gothumLastTrickOrTreatedAt(gothum),
			end: gothumReadyAt(gothum)
		}),
		{
			zero: false
		}
	);
</script>

{#if isGothumReady(gothum)}
	<span>Ready</span>
{:else}
	<span>{time}</span>
{/if}
