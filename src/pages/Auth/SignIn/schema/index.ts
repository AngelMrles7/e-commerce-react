import * as yup from 'yup';

export const validateLogin = yup.object().shape({
	email: yup
		.string()
		.email('Ingresa tu correo')
		.required('El correo es requerido'),
	password: yup.string().required('La contraseña es requerida'),
});
