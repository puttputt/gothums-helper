import { writable } from 'svelte/store';

export const gumStore = writable(() => {
	const gums = localStorage.getItem('gums');

	if (gums) {
		return JSON.parse(gums);
	}
	return [];
});

export const writeGums = (gums) => {
	gumStore.update(() => gums);
	localStorage.setItem('gums', JSON.stringify(gums));
};
