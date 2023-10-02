import { ReactNode } from 'react';

interface AsideNavItemProps {
	leftIcon?: JSX.Element;
	rightIcon?: JSX.Element;
	children: ReactNode;
	onClick?: () => void;
}

export const AsideNavItem: React.FC<AsideNavItemProps> = ({
	leftIcon,
	rightIcon,
	children,
	onClick,
}) => {
	return (
		<li className='side-nav__content__item' onClick={onClick}>
			{leftIcon && <span className='icon-left'>{leftIcon}</span>}
			{children}
			{rightIcon && <span className='icon-right'>{rightIcon}</span>}
		</li>
	);
};
