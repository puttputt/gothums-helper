import type { GumResult } from '@domain/models/GumResult';
import { gothumContractStore, trickOrTreatContractStore } from '@store';
import { GOTHUM_API } from '@utils/config';
import type { BigNumber } from 'ethers';
import { get } from 'svelte/store';

export const trickOrTreat = async (gumId: number, doorId: number): Promise<void> => {
	const totContract = get(trickOrTreatContractStore);
	return await totContract.trickOrTreat(gumId, doorId);
};

export const trickOrTreatMany = async (
	gumIds: number[],
	doorId: number
): Promise<Promise<void>[]> => {
	return gumIds.map(async (gumId) => await trickOrTreat(gumId, doorId));
};

export const getLastTrickOrTreated = async (gumId: number): Promise<BigNumber> => {
	const totContract = get(trickOrTreatContractStore);
	return await totContract.lastTrickOrTreated(gumId);
};

export const getTrickOrTreatingEnabled = async (): Promise<boolean> => {
	const totContract = get(trickOrTreatContractStore);
	return await totContract.trickOrTreatingEnabled();
};

export const balanceOf = async (owner: string): Promise<BigNumber> => {
	const gothumContract = get(gothumContractStore);
	return await gothumContract.balanceOf(owner);
};

export const getGothumId = async (owner: string, index: number): Promise<BigNumber> => {
	const gothumContract = get(gothumContractStore);
	return await gothumContract.tokenOfOwnerByIndex(owner, index);
};

export const getGothumIds = async (owner: string): Promise<BigNumber[]> => {
	const balance = await balanceOf(owner);
	return await Promise.all(
		[...Array(balance.toNumber()).keys()].map(async (i) => await getGothumId(owner, i))
	);
};

export const getGothum = async (gumId: number): Promise<GumResult> => {
	try {
		const response = await fetch(GOTHUM_API + gumId);
		return await response.json();
	} catch (e) {
		console.error(e);
	}
};
