<script>
	import { web3Store } from '@store';
	import ConnectButton from '../ConnectButton';
</script>

<div class="header">
	<img class="img" src="img/logo_gm.png" alt="Gothums" />
	<h1>Gothums Helper</h1>
	{#if !$web3Store.connected}
		<ConnectButton />
	{:else}
		{$web3Store.accounts[0]}
	{/if}
</div>

<style>
	.header {
		padding-left: 100px;
		padding-right: 100px;
		background-color: #000;
		height: 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.img {
		width: 200px;
		object-fit: contain;
	}
</style>
