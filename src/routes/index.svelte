<script>
	import MainPage from '@domain/components/MainPage/MainPage.svelte';
	import { connectWeb3 } from '@store';
	import { onMount } from 'svelte';

	onMount(async () => {
		await connectWeb3();
	});
</script>

<MainPage />
