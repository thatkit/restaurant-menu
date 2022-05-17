import { defineStore } from "pinia";

export const useNewCuisineStore = defineStore("newCuisine", {
	state: () => ({
		newCuisine: "",
	}),
	actions: {
		async setNewCuisine(name: string) {
			this.newCuisine = name;
		},
	},
});
