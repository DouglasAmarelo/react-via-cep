const getDataFromApi = async (apiUrl) => {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();

		return data;
	}
	catch (err) {
		return console.error('Error: ', err);
	}
};

export default getDataFromApi;