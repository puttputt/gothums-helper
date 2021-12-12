<script type="ts">
	import { connectWeb3 } from '@store';

	const connect = async () => {
		await connectWeb3();
	};
</script>

<button on:click={connect}>Connect</button>

<style>
	button {
		width: fit-content;
		height: fit-content;

		border-radius: 0.3rem;
		border: 1px solid white;
		background-color: black;
		padding: 0.5rem 1rem;
		font-size: 1.25rem;
		color: white;
	}

	button:hover {
		background-color: white;
		color: black;
	}

	button:active {
		background-color: white;
		color: black;
		transform: translateY(4px);
	}
</style>
