import { defineStore } from "pinia";

export const useFormValidationStore = defineStore("formValidation", {
	state: () => ({
		isValid: false,
	}),
	actions: {
		setIsValid(isValid: boolean) {
			this.isValid = isValid;
		},
	},
});
