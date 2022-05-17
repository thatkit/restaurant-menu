export const validateForm = (): boolean[] => {
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	return Array.prototype.slice.call(forms).map((form) => {
		form.classList.add("was-validated");
		return form.checkValidity();
	});
};
