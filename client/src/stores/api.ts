import { defineStore } from "pinia";
import {
	ADD_NEW_CUISINE,
	CREATE_NEW_COURSE,
	FIND_ALL_CUISINES,
} from "@/api/apiClient";
import { useNewCourseStore } from "./forms/newCourse";
import { useNewCuisineStore } from "./forms/newCuisine";

export const useApiStore = defineStore("api", {
	state: () => {
		return {
			cuisines: [],
		};
	},
	getters: {
		getCuisines: (state) => state.cuisines,
	},
	actions: {
		// CUISINES slice
		async setCuisines() {
			try {
				const response = await FIND_ALL_CUISINES();
				this.cuisines = response;
			} catch (err) {
				console.log(err);
			}
		},
		async addNewCuisine() {
			try {
				const newCuisineStore = useNewCuisineStore();
				const response = await ADD_NEW_CUISINE(
					newCuisineStore.$state.newCuisine
				);
				this.cuisines.push(response); // #
			} catch (err) {
				console.log(err);
			}
		},
		// COURSES (MENU) slice
		async createNewCourse() {
			try {
				const newCourseStore = useNewCourseStore();
				const response = await CREATE_NEW_COURSE(newCourseStore.$state);
			} catch (err) {
				console.log(err);
			}
		},
	},
});
