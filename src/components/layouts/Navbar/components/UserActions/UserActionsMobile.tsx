import { Link } from 'react-router-dom';
import AsideNav from '../AsideNav/AsideNav';
import { AsideNavContent } from '../AsideNav/components/AsideNavContent';
import { AsideNavItem } from '../AsideNav/components/components/AsideNavItem';
import { ROLES } from '../../../../../data/constants';
import { useAuthActions } from '../../../../../hooks';
import { LuLogIn } from 'react-icons/lu';

interface UserActionsMobileProps {
	openPanel: boolean;
	closePanel: () => void;
}

export const UserActionsMobile: React.FC<UserActionsMobileProps> = ({
	openPanel,
	closePanel,
}) => {
	const { getUserRole, authState, userLogout } = useAuthActions();
	return (
		<AsideNav
			title='Cuenta'
			openPanel={openPanel}
			panelDirection='right'
			closePanel={closePanel}
		>
			<AsideNavContent>
				{!authState.isLogin && (
					<>
						<AsideNavItem>
							<Link to='/signin'>Sign In</Link>
						</AsideNavItem>
						<AsideNavItem>
							<Link to='/signup'>Sign Up</Link>
						</AsideNavItem>
					</>
				)}
				{(getUserRole() === ROLES.ADMIN ||
					getUserRole() === ROLES.MODERATOR) && (
					<AsideNavItem>
						<Link to='/dashboard'>DashBoard</Link>
					</AsideNavItem>
				)}
				{authState.isLogin && (
					<AsideNavItem>
						<button
							type='button'
							title='logout'
							className='logout-btn'
							onClick={() => userLogout()}
						>
							<LuLogIn />
							Cerrar sesión
						</button>
					</AsideNavItem>
				)}
			</AsideNavContent>
		</AsideNav>
	);
};
