export const currencyConverter = (value: number = 0) => {
	return new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
		minimumFractionDigits: 2,
	}).format(value);
};
