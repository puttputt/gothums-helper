<div class="instructions">
	<p>Welcome to the unnofficial Gothum's helper. Easily send all your gothums trick or treating</p>

	<div class="grid">
		<div class="left">
			<h3>Instructions</h3>
			<ol>
				<li>Wait for all your gothums to be Ready.</li>
				<li>Click "Trick or Treat"</li>
				<li>
					Ensure the contract interaction transaction matches the official Gothums Trick or Treat
					contract
				</li>
				<li>
					Wait for TX confirmed in between confirming transaction requests. Too many in succession
					will cause the transactions to fail.
				</li>
			</ol>
		</div>
		<div class="right">
			<h3>How it Works</h3>

			<p>
				This app retrieves the connect wallet's list of Gothums and creates a transaction on the
				official Gothum's Trick or Treat contract (<a
					href="https://ftmscan.com/address/0xc7264c6028ca51e5bea1b5d3462ce3a0eeb3dfce"
					>0xc7264c6028ca51e5bea1b5d3462ce3a0eeb3dfce</a
				>).
			</p>
			<p>
				It calls the trickOrTreat function for each Gothum that is elligble for trick or treating
				and by default selects door #1. The calculation for CNDY rewards is = (timestamp + doorId)
				mod 10. Where doorId could be 1 through 4, we deemed the door to be insignificant in the
				result.
			</p>
		</div>
	</div>
</div>

<style>
	.instructions {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.grid {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
	.left {
		display: flex;
		flex-direction: column;
		width: 50%;
		align-items: center;
	}

	.right {
		display: flex;
		flex-direction: column;
		width: 50%;
		align-items: center;
	}

	p {
		padding: 8px;
	}
</style>
