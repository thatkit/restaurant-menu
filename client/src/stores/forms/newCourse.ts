import { defineStore } from "pinia";
import type { CoursePropType, EnergyPropType } from "@/types";

export const useNewCourseStore = defineStore("newCourse", {
	state: () => ({
		name: "",
		desc: "",
		price: "",
		cuisineId: "",
		ingredients: "",
		energy: {
			kcal: "",
			prots: "",
			carbs: "",
			fats: "",
		},
	}),
	actions: {
		setCourseProp(key: CoursePropType, value: string) {
			this[
				key as "name" | "desc" | "price" | "cuisineId" | "ingredients"
			] = value;
		},
		setEnergyProp(key: EnergyPropType, value: string) {
			this.energy = {
				...this.energy,
				[key]: value,
			};
		},
	},
});
