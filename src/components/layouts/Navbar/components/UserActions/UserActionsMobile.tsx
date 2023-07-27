import { Link } from 'react-router-dom';
import AsideNav from '../AsideNav/AsideNav';
import { AsideNavContent } from '../AsideNav/components/AsideNavContent';
import { AsideNavItem } from '../AsideNav/components/components/AsideNavItem';

interface UserActionsMobileProps {
	openPanel: boolean;
	closePanel: () => void;
}

export const UserActionsMobile: React.FC<UserActionsMobileProps> = ({
	openPanel,
	closePanel,
}) => {
	return (
		<AsideNav
			title='Cuenta'
			openPanel={openPanel}
			panelDirection='right'
			closePanel={closePanel}
		>
			<AsideNavContent>
				<AsideNavItem>
					<Link to='/signin'>Sign In</Link>
				</AsideNavItem>
				<AsideNavItem>
					<Link to='/signup'>Sign Up</Link>
				</AsideNavItem>
				<AsideNavItem>
					<Link to='/dashboard'>DashBoard</Link>
				</AsideNavItem>
			</AsideNavContent>
		</AsideNav>
	);
};
