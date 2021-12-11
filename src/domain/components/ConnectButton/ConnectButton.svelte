<script type="ts">
	import { connectWeb3 } from '@store';

	const connect = async () => {
		await connectWeb3();
	};
</script>

<button on:click={connect}>Connect</button>
