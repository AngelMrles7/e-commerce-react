import { ReactNode } from 'react';

interface AsideNavItemProps {
	children: ReactNode;
	onClick?: () => void;
}

export const AsideNavItem: React.FC<AsideNavItemProps> = ({
	children,
	onClick,
}) => {
	return (
		<li className='side-nav__content__item__list' onClick={onClick}>
			{children}
		</li>
	);
};
