export const validateStatus = (status: number) => {
	return status >= 200 && status < 400;
};
