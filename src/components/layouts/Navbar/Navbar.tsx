import { Link } from 'react-router-dom';
import { LuShoppingCart, LuUser, LuAlignJustify } from 'react-icons/lu';
import { useState } from 'react';
import { useAppSelector, useScreenSize } from '../../../hooks';
import { Search, UserActions, UserActionsMobile } from './components';
import { Navigation } from './components/Navigation/Navigation';

export const Navbar = () => {
	const totalItemsInCart = useAppSelector(
		state => state.shoppingCart.totalItemsCart
	);
	const { screenWidth } = useScreenSize();
	const [isOpenNavPanel, setIsOpenNavPanel] = useState(false);
	const [isOpenUserPanel, setIsOpenUserPanel] = useState(false);

	const handleNavPanelState = () => {
		setIsOpenNavPanel(!isOpenNavPanel);
		if (isOpenUserPanel === true) setIsOpenUserPanel(!isOpenUserPanel);
	};

	const handleUserPanelState = () => {
		if (isOpenNavPanel === true) setIsOpenNavPanel(!isOpenNavPanel);
		setIsOpenUserPanel(!isOpenUserPanel);
	};

	return (
		<header className='main-nav'>
			<div className='nav-wrapp'>
				<div className='nav__container'>
					<div>
						<button
							type='button'
							className='panel-button'
							title='open panel'
							onClick={handleNavPanelState}
						>
							<LuAlignJustify />
						</button>

						<Navigation
							openPanel={isOpenNavPanel}
							closePanel={handleNavPanelState}
						/>
					</div>

					<div className='nav__container__logo'>
						{/* include the url where the logo of the company is located */}
						<img alt='logo' src={''} />
					</div>
				</div>

				<div className='nav__search-bar'>
					<Search />
				</div>
				<div className='nav__menu'>
					<div className='nav__menu__user-actions'>
						<div className='account' onClick={handleUserPanelState}>
							<LuUser />
						</div>
						{screenWidth >= 600 ? (
							<UserActions />
						) : (
							<UserActionsMobile
								openPanel={isOpenUserPanel}
								closePanel={handleUserPanelState}
							/>
						)}
					</div>

					<Link to='/cart' className='nav__menu__shoppingCart'>
						<LuShoppingCart />
						<span className='cart-amount'>{totalItemsInCart}</span>
					</Link>
				</div>
			</div>
		</header>
	);
};
