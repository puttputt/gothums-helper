import type { GumResult } from '@domain/models/GumResult';
import { GOTHUM_API } from '@utils/config';
import type { BigNumber } from 'ethers';

const delay = (time) => new Promise((res) => setTimeout(res, time));

export const getGothum = async (gumId: number): Promise<GumResult> => {
	try {
		const response = await fetch(GOTHUM_API + gumId);
		await delay(200);
		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

export const getGothums = async (gumIds: BigNumber[]): Promise<GumResult[]> => {
	let gums = [];
	try {
		let now = new Date().getTime();

		let rateLimitRemaining = 120;
		let rateLimitReset = now + 60000;

		for (let gumId of gumIds) {
			now = new Date().getTime();
			if (rateLimitRemaining === 0 && now - rateLimitReset <= 0) {
				console.log('rate limited', rateLimitReset - now);
				await delay(rateLimitReset - now);
				rateLimitRemaining = 120;
				rateLimitReset = new Date().getTime() + 60000;
			}
			const response = await fetch(GOTHUM_API + gumId.toNumber());

			rateLimitRemaining -= 1;

			gums = [...gums, await response.json()];
		}
		return gums;
	} catch (e) {
		console.error(e);
	}
};
