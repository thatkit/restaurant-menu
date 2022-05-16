import axios from "axios";

export const FIND_ALL_CUISINES = async () => {
	try {
		const response = await axios.get("http://localhost:5000/api/cuisines");
		return response.data;
	} catch (err) {
		console.log(err); // # handle errors gracefully
	}
};

export const ADD_NEW_CUISINE = async (name: string) => {
	try {
		const response = await axios.post(
			"http://localhost:5000/api/cuisines",
			{ name }
		);
		console.log(response);
		return response.data;
	} catch (err) {
		console.log(err); // # handle errors gracefully
	}
};
