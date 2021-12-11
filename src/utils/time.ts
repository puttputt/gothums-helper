import type { GumResult } from '@domain/models/GumResult';
import { addSeconds } from 'date-fns';

export const isGothumReady = (gothum: GumResult): boolean => {
	const twenty_four_hours = 86400;
	const difference = gothum.last + twenty_four_hours - Date.now() / 1000;
	return difference <= 0;
};

export const gothumReadyAt = (gothum: GumResult): Date => {
	const twenty_four_hours = 86400;
	return addSeconds(new Date(0), gothum.last + twenty_four_hours);
};

export const gothumLastTrickOrTreatedAt = (gothum: GumResult): Date => {
	return addSeconds(new Date(0), gothum.last);
};
