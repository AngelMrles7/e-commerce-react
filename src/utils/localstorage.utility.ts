export const setLocalStorage = (key: string, value: any) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (err) {
		localStorage.removeItem(key);
	}
};

export const getLocalStorage = (key: string) =>
	localStorage.getItem(key)
		? JSON.parse(localStorage.getItem(key) || '{}')
		: false;
