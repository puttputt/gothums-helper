<script type="ts">
	import { trickOrTreatMany } from '@services/gothums';
	import { isGothumReady } from '@utils/time';

	export let gothums;
	const trickOrTreat = async () => {
		const readyGothums = gothums
			.filter((gothum) => isGothumReady(gothum))
			.map((gothum) => gothum.id);

		await trickOrTreatMany(readyGothums, 1);
	};
</script>

<button class="button" on:click={() => trickOrTreat()}>Trick or Treat</button>

<style>
	.button {
		width: fit-content;
		background-color: #f78d15;
		border-radius: 0.3rem;
		padding: 0.5rem 1rem;
		font-size: 1.25rem;
		color: white;
	}
</style>
