<div class="instructions">
	<p>
		Welcome to the unofficial <a href="https://gothums.com">Gothum</a>'s helper. Easily send all
		your gothums trick or treating to a random door every 24 hours to collect $CNDY.
	</p>

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
				and randomly selects door 1-4.
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
		margin: 8px;
	}
	.left {
		display: flex;
		flex-direction: column;
		width: 50%;
		align-items: center;
		padding-right: 16px;
	}

	.right {
		display: flex;
		flex-direction: column;
		width: 50%;
		align-items: center;
		padding-left: 16px;
	}

	p {
		padding: 8px;
	}
</style>
