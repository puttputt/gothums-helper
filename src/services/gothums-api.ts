import type { GumResult } from '@domain/models/GumResult';
import { GOTHUM_API } from '@utils/config';

export const getGothum = async (gumId: number): Promise<GumResult> => {
	try {
		const response = await fetch(GOTHUM_API + gumId);
		return await response.json();
	} catch (e) {
		console.error(e);
	}
};
