import { LuLogIn } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { useAuthActions } from '../../../../../hooks';
import { ROLES } from '../../../../../data/constants';

const UserActions = () => {
	const { getUserRole, authState, userLogout } = useAuthActions();

	return (
		<div className='user-actions__popover'>
			<ul className='user-actions__popover__options'>
				{!authState.isLogin && (
					<>
						<li className='user-actions__popover__options__item'>
							<Link to='/signin'>Iniciar sesión</Link>
						</li>
						<li className='user-actions__popover__options__item'>
							<Link to='/signup'>Crear cuenta</Link>
						</li>
					</>
				)}

				{(getUserRole() === ROLES.ADMIN ||
					getUserRole() === ROLES.MODERATOR) && (
					<li className='user-actions__popover__options__item'>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
				)}

				{authState.isLogin && (
					<li className='user-actions__popover__options__item'>
						<button
							type='button'
							title='logout'
							className='logout-btn'
							onClick={() => userLogout()}
						>
							<LuLogIn />
							Cerrar sesión
						</button>
					</li>
				)}
			</ul>
		</div>
	);
};

export default UserActions;
