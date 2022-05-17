import { fromJsObjToFormDataMapper } from "@/tools/fromJsObjToFormDataMapper";
import type { NewCourse } from "@/types";
import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export const FIND_ALL_CUISINES = async () => {
	try {
		const response = await axios.get(`${baseUrl}/cuisines`);
		return response.data;
	} catch (err) {
		console.log(err); // # handle errors gracefully
	}
};

export const ADD_NEW_CUISINE = async (name: string) => {
	try {
		const response = await axios.post(`${baseUrl}/cuisines`, { name });
		console.log(response);
		return response.data;
	} catch (err) {
		console.log(err); // # handle errors gracefully
	}
};

export const CREATE_NEW_COURSE = async (newCourse: NewCourse) => {
	try {
		const response = await axios.post(
			`${baseUrl}/courses`,
			fromJsObjToFormDataMapper(newCourse)
		);
		console.log(response);
		return response.data;
	} catch (err) {
		console.log(err); // # handle errors gracefully
	}
};
