<script type="ts">
	import { Currency } from '@domain/models/Currency';
	import { FTMDefaults } from '@domain/models/Currency';
	import { CNDYdefaults } from '@domain/models/Currency';
	import { donateCNDY, donateFTM } from '@services/donate';

	export let currency: Currency;
	export let close;
	let defaults;
	let amounts;
	let title;
	let customAmount = 1;

	if (currency === Currency.CNDY) {
		title = 'Candy $CNDY';
		defaults = CNDYdefaults;
		amounts = defaults[0];
	} else {
		title = 'Fantom $FTM';
		defaults = FTMDefaults;
		amounts = defaults[0];
	}

	const donate = () => {
		if (amounts === -1) {
			amounts = customAmount;
		}
		if (currency === Currency.CNDY) {
			donateCNDY(amounts);
		} else {
			donateFTM(amounts);
		}
	};
</script>

<div class="container">
	<div class="header">
		<h3>Donate {title}</h3>

		<a href={null} on:click={close}>[close]</a>
	</div>

	<div class="radios">
		{#each defaults as val}
			<div class="radio">
				<label class="radio-label">
					<input name="radio" type="radio" bind:group={amounts} value={val} />
					{val}</label
				>
			</div>
		{/each}

		<div class="radio">
			<label class="radio-label"
				><input name="radio" type="radio" bind:group={amounts} value={-1} />
				Custom</label
			>
			<input bind:value={customAmount} type="number" />
		</div>
	</div>

	<button on:click={donate}>Submit</button>
</div>

<style>
	.container {
		display: flex;
		border-radius: 15px;
		width: 300px;
		background: #8b0000;
		padding: 1rem;
		flex-direction: column;
	}

	h3 {
		margin-top: 0px;
	}

	.radios {
		margin-bottom: 16px;
	}
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

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
