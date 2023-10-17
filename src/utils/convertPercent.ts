export const convertPercent = (data: string | number | undefined) => {
	return Math.round(Number(data) * 100);
};
