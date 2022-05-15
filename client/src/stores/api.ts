import { defineStore } from "pinia";
import { apiClient } from "./apiClient";

const client = new apiClient();

export const useStore = defineStore("api", {
	state: () => {
		return {
			number: 0,
			cuisines: [
				{ id: 1, name: "One" },
				{ id: 2, name: "Two" },
			],
		};
	},
	getters: {
		getCuisines: (state) => state.cuisines,
	},
	actions: {
		async addCuisines() {
			try {
                const response = await client.FIND_ALL_CUISINES();
                this.cuisines = response;
                // # handle errors gracefully 
			} catch (err) {
				console.log(err);
			}
		},
	},
});
