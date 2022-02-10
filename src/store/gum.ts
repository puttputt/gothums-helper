import { writable } from 'svelte/store';

export const gumStore = writable([]);

export const loadGums = () =>
	gumStore.update(() => {
		const gums = localStorage.getItem('gums');

		if (gums) {
			try {
				return JSON.parse(gums);
			} catch (e) {
				console.error(e);
				return [];
			}
		} else {
			return [];
		}
	});

export const writeGums = (gums) => {
	localStorage.setItem('gums', JSON.stringify([]));
	localStorage.setItem('gums', JSON.stringify(gums));
};
