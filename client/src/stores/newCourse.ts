import { defineStore } from "pinia";
import type { CoursePropType, EnergyPropType } from "@/types";

export const useNewCourseStore = defineStore("newCourse", {
	state: () => {
		return {
			name: "",
			desc: "",
			price: "",
			selectedCuisineId: "",
			ingred: "",
			energy: {
				kcal: "",
				prots: "",
				carbs: "",
				fats: "",
			},
		};
	},
	getters: {
		getNewCourse: (state) => state,
	},
	actions: {
		setCourseProp(key: CoursePropType, value: string) {
			this[key] = value;
		},
		setEnergyProp(key: EnergyPropType, value: string) {
			this.energy = {
				...this.energy,
				[key]: value,
			};
		},
	},
});
