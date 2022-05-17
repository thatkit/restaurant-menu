export const fromJsObjToFormDataMapper = (jsObj: object) => {
	const formData = new FormData();

	// Top level loop
	const entries = fromObjToEnrties(jsObj);
	entries.forEach((entry) => {
		if (isEntryType(entry[1])) {
			formData.append(entry[0], entry[1]);
			return null;
		}

		// Nested properties loop
		const subEntries = fromObjToEnrties(entry[1]);
		subEntries.forEach((subEntry) => {
			formData.append(`${entry[0]}[${subEntry[0]}]`, subEntry[1]);
		});
	});

	return formData;
};

const fromObjToEnrties = (jsObj: object) => {
	return Object.entries(jsObj);
};

const isEntryType = (value: any) => {
	return typeof value === "string" || typeof value === "number";
};
