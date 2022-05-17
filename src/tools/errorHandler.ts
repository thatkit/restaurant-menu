export const serverError = { message: "Server error", code: 500 };

export const errorHandler = (err: unknown) => {
	console.log(err);
	return serverError;
};
