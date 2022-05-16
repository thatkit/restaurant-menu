import { defineStore } from "pinia";

export const useNewCourseStore = defineStore("api", {
	state: () => {
		return {
			name: "",
			desc: "",
			price: 0,
			selectedCuisineId: "",
			ingred: "",
			energy: {
				kcal: 0,
				prots: 0,
				carbs: 0,
				fats: 0,
			},
		};
	},
	actions: {
		setName(name: string) {
			this.name = name;
		},
		setDesc(desc: string) {
			this.desc = desc;
		},
		setPrice(price: number) {
			this.price = price;
		},
		setSelectedCuisineId(selectedCuisineId: string) {
			this.selectedCuisineId = selectedCuisineId;
		},
		setIngred(ingred: string) {
			this.ingred = ingred;
		},
		setKcal(kcal: number) {
			this.energy = { ...this.energy, kcal };
		},
		setProts(prots: number) {
			this.energy = { ...this.energy, prots };
		},
		setCarbs(carbs: number) {
			this.energy = { ...this.energy, carbs };
		},
		setFats(fats: number) {
			this.energy = { ...this.energy, fats };
		},
	},
});
