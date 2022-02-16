<script>
	import DonateButton from '../DonateButton';
	import { Currency } from '@domain/models/Currency';
	import DonationModal from '../DonationModal';
</script>

<div class="footer">
	<a href="https://github.com/puttputt/gothums-helper"
		><img src="/img/github-logo.png" alt="github" /></a
	>
	<p>made with ❤️ by @puttputt in <a href="https://fantums.com/discord">Fantums discord</a></p>

	<span class="buttons"
		><DonateButton currency={Currency.FTM} />
		<DonateButton currency={Currency.CNDY} />
	</span>

	<p class="address">0x71C1cFec0138F92e62804876C01d4B0B86B62033</p>
</div>

<style>
	.footer {
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px;
		flex-direction: column;
	}

	.footer img {
		width: 32px;
	}

	.address {
		font-size: small;
	}

	.buttons {
		display: flex;
		flex-direction: row;
	}
</style>
