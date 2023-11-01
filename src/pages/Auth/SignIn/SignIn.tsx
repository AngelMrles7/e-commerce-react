import { Formik, Form } from 'formik';
import InputField from '../../../components/InputField/InputField';
import { validateLogin } from './schema';
import { loginUser } from '../../../appState/states/AuthState';
import { useAppDispatch } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<div className='auth-section'>
			<div className='auth-section__container'>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={validateLogin}
					onSubmit={value => {
						dispatch(loginUser(value)).then(res => {
							if (res.type === '/auth/login/fulfilled') return navigate('/');
						});
					}}
				>
					{({
						values,
						errors,
						handleChange,
						touched,
						handleSubmit,
						handleBlur,
					}) => (
						<Form onSubmit={handleSubmit}>
							<h1 className='auth-section__title'>Iniciar sesión</h1>

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

							<div className='auth-section__recovery'>
								<a>Recuperar contraseña</a>
							</div>

							<button className='auth-section__signin-btn' type='submit'>
								Inciar
							</button>
							<div className='auth-section__register'>
								<a>Crear cuenta</a>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default SignIn;
