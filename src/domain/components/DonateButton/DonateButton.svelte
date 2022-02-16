<script type="ts">
	import type { Currency } from '@domain/models/Currency';
	import DonationModal from '@domain/components/DonationModal';

	export let currency: Currency;

	let modalShown = false;

	const showModal = (currency: Currency) => {
		modalShown = true;
	};

	const hideModal = () => {
		modalShown = false;
	};
</script>

{#if !modalShown}
	<button on:click={() => showModal(currency)}
		>Donate <img class="currencyLogo" src={currency} alt="currency icon" /></button
	>
{:else}
	<DonationModal {currency} close={hideModal} />
{/if}

<style>
	button {
		width: fit-content;
		height: fit-content;
		border-radius: 0.3rem;
		border: 1px solid black;
		background-color: #8b0000;
		padding: 0.25rem 1rem;
		font-size: 1rem;
		color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	button:hover {
		background-color: white;
		color: red;
	}

	.currencyLogo {
		width: 26px;
		height: 26px;
		border: 1px solid white;
		-webkit-border-radius: 16px; /* Saf3+, Chrome */
		border-radius: 16px; /* Opera 10.5, IE 9 */
		/*-moz-border-radius: 30px;  Disabled for FF1+ */
		margin-left: 0.5rem;
	}

	button:active {
		transform: translateY(4px);
	}
</style>
