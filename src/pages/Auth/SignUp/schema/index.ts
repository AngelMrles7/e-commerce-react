import * as yup from 'yup';
const nameRule = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/;

const emailRules =
	/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
const passwordRules =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

export const validateRegister = yup.object().shape({
	name: yup
		.string()
		.required('Este campo es requerido')
		.matches(nameRule, { message: 'Escribe tu nombre' }),
	email: yup
		.string()
		.email('Por favor ingresa tu email')
		.matches(emailRules, { message: 'El correo electronico es invalido' })
		.required('Este campo es requerido'),
	password: yup
		.string()
		.matches(passwordRules, {
			message:
				'* La contraseña debe tener un mínimo de 8 caracteres entre minúsculas, mayúsculas, números y al menos 1 carácter especial.',
		})
		.required('Este campo es requerido'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'La contraseña no coincide')
		.required('Este campo es requerido'),
});
