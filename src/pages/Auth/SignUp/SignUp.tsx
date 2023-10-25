import { Formik, Form } from 'formik';
import { InputField } from '../../../components';
import { validateRegister } from './schema';
import { BASE_URL } from '../../../services';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
	const navigate = useNavigate();
	return (
		<div className='auth-section'>
			<div className='auth-section__container'>
				<Formik
					initialValues={{
						name: '',
						email: '',
						password: '',
						confirmPassword: '',
					}}
					validationSchema={validateRegister}
					onSubmit={async (value, { resetForm, setFieldError }) => {
						try {
							const response = await fetch(`${BASE_URL}auth/register`, {
								method: 'post',
								headers: {
									Accept: 'application/json, text/plain, */*',
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(value),
							});

							const result = await response.json();

							if (!response.ok) {
								Object.entries(result.data).forEach(([key, value]) => {
									setFieldError(key, value[0]);
								});
								throw `Error ${result.statusCode}: ${result.message}`;
							}

							resetForm();
							navigate('/singin');
						} catch (error) {
							console.error(error);
						}
					}}
				>
					{({
						values,
						errors,
						touched,
						handleBlur,
						handleChange,
						handleSubmit,
						isSubmitting,
					}) => (
						<Form onSubmit={handleSubmit}>
							<h1 className='auth-section__title'>Crear cuenta</h1>
							<InputField
								name='name'
								labelName='Nombre'
								type='text'
								value={values.name}
								error={errors.name}
								onBlur={handleBlur}
								onChange={handleChange}
								touched={touched.name}
							/>
							<InputField
								name='email'
								labelName='Correo electronico'
								type='email'
								value={values.email}
								error={errors.email}
								onBlur={handleBlur}
								onChange={handleChange}
								touched={touched.email}
							/>
							<InputField
								name='password'
								labelName='Contraseña'
								type='password'
								value={values.password}
								error={errors.password}
								onBlur={handleBlur}
								onChange={handleChange}
								touched={touched.password}
							/>

							<InputField
								name='confirmPassword'
								labelName='Confirma la contraseña'
								type='password'
								value={values.confirmPassword}
								error={errors.confirmPassword}
								onBlur={handleBlur}
								onChange={handleChange}
								touched={touched.confirmPassword}
							/>

							<button
								type='submit'
								title='register'
								className='auth-section__signin-btn'
								disabled={isSubmitting}
							>
								Registrarse
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
