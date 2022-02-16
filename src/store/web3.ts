import { ethers } from 'ethers';
import GothumsContract from '@abi/gothums.json';
import ToTContract from '@abi/tot.json';
import CandyContract from '@abi/candy.json';
import { writable, derived } from 'svelte/store';
import { TOT_CONTRACT, GOTHUMS_CONTRACT, CANDY_CONTRACT } from '@utils/config';

const getWindowEthereum = () => {
	try {
		if ((window as Window).ethereum) return window.ethereum;
	} catch (err) {
		console.error('no globalThis.ethereum object');
	}
};

export const web3Store = writable({
	connected: false,
	accounts: [],
	provider: undefined,
	signer: undefined
});

export const connectWeb3 = async (): Promise<void> => {
	const provider = new ethers.providers.Web3Provider(getWindowEthereum());
	const accounts = await provider.send('eth_requestAccounts', []);
	const signer = provider.getSigner();

	web3Store.update(() => ({
		connected: true,
		provider: provider,
		signer: signer,
		accounts: accounts
	}));
};

export const trickOrTreatContractStore = derived(web3Store, ($web3Store) => {
	if ($web3Store.connected) {
		return new ethers.Contract(TOT_CONTRACT, ToTContract, $web3Store.signer);
	}
	return null;
});

export const gothumContractStore = derived(web3Store, ($web3Store) => {
	if ($web3Store.connected) {
		return new ethers.Contract(GOTHUMS_CONTRACT, GothumsContract, $web3Store.signer);
	}
	return null;
});

export const candyContractStore = derived(web3Store, ($web3Store) => {
	if ($web3Store.connected) {
		return new ethers.Contract(CANDY_CONTRACT, CandyContract, $web3Store.signer);
	}
	return null;
});
