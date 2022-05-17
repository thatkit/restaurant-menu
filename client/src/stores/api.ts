import { defineStore } from "pinia";
import {
	ADD_NEW_CUISINE,
	CREATE_NEW_COURSE,
	FIND_ALL_CUISINES,
} from "@/api/apiClient";
import { useNewCourseStore } from "./newCourse";

export const useStore = defineStore("api", {
	state: () => {
		return {
			cuisines: [],
			newCuisine: "",
		};
	},
	getters: {
		getCuisines: (state) => state.cuisines,
	},
	actions: {
		// CUISINES slice
		async setNewCuisine(name: string) {
			this.newCuisine = name;
		},
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
				const response = await ADD_NEW_CUISINE(this.newCuisine);
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
