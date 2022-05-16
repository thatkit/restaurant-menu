import type { CoursePropType, EnergyPropType } from "@/types";
import { defineStore } from "pinia";

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
	actions: {
		setCourseProp(key: CoursePropType, value: string) {
			this[key] = value;
			console.log(this);
		},
		setEnergyProp(key: EnergyPropType, value: string) {
			this.energy = {
				...this.energy,
				[key]: value
			};
		},
	},
});
