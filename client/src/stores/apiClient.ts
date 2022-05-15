export class apiClient {
	baseUrl = "http://localhost:5000";

	FIND_ALL_CUISINES = async () => {
		const endpoint = `${this.baseUrl}/cuisines`;

		const request = new Request(endpoint);

		const response = await fetch(request);
		const json = response.json();
		return json;
	};
}
