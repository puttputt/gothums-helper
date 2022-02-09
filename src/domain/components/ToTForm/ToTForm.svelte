<script type="ts">
	import { trickOrTreat } from '@services/gothums';
	import { isGothumReady } from '@utils/time';

	export let gothums;
	const trickOrTreatClicked = async () => {
		const readyGothums = gothums
			.filter((gothum) => isGothumReady(gothum))
			.map((gothum) => +gothum.id);

		readyGothums.forEach(async (gumId) => {
			try {
				await trickOrTreat(gumId, Math.floor(1 + Math.random() * 4));
			} catch (e) {
				console.error(e);
			}
		});
	};
</script>

<button on:click={() => trickOrTreatClicked()}>Trick or Treat</button>

<style>
	button {
		width: fit-content;
		background-color: #f78d15;
		border-radius: 0.3rem;
		padding: 0.5rem 1rem;
		font-size: 1.25rem;
		color: white;
	}

	button:active {
		transform: translateY(4px);
	}
</style>
