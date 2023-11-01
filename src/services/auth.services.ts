import { BASE_URL } from '.';

export const logoutRequest = async (token = '') => {
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await fetch(`${BASE_URL}auth/logout`, options),
		json = await response.json();

	if (!response.ok) {
		throw `Error ${json.statusCode}: ${json.message}`;
	}

	return json;
};
