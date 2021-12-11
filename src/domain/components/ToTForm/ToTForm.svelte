<script type="ts">
	import { trickOrTreatMany } from '@services/gothums';
	import { isGothumReady } from '@utils/time';

	import { each } from 'svelte/internal';

	export let gothums;
	const trickOrTreat = async () => {
		const readyGothums = gothums
			.filter((gothum) => isGothumReady(gothum))
			.map((gothum) => gothum.id);

		await trickOrTreatMany(readyGothums, 1);
	};
</script>

<button on:click={() => trickOrTreat()}>Trick or Treat</button>
