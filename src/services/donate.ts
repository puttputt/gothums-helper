import { candyContractStore, web3Store } from '@store/web3';
import { ethers } from 'ethers';
import { get } from 'svelte/store';

const donationAddress = '0x71C1cFec0138F92e62804876C01d4B0B86B62033';

export const donateFTM = async (amount: number): Promise<void> => {
	const web3 = get(web3Store);
	web3.signer.sendTransaction({
		to: donationAddress,
		value: ethers.utils.parseEther(amount.toString())
	});
};

export const donateCNDY = async (amount: number): Promise<void> => {
	const candyContract = get(candyContractStore);
	return await candyContract.transfer(donationAddress, ethers.utils.parseEther(amount.toString()));
};
