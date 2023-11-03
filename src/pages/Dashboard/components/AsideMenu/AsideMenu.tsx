import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/img/mylogo.png';
import { LuShoppingBag } from 'react-icons/lu';
import { FC } from 'react';

interface AsideMenuInterface {
	isOpenMenu: boolean;
}

const AsideMenu: FC<AsideMenuInterface> = ({ isOpenMenu }) => {
	return (
		<aside className={`main-sidebar  ${isOpenMenu ? 'close' : ''} `}>
			<div className='main-sidebar__top'>
				<NavLink to='/'>
					<img src={logo} alt='' className='company__logo' />
					<span className='company__name'>Name Ecommerce</span>
				</NavLink>
			</div>
			<div className='main-sidebar__center'>
				<nav className='main-sidebar__menu'>
					<ul className='main-sidebar__menu__list'>
						<li className='main-sidebar__menu__list__title'>
							<p className='title-text'>Gestiones</p>
						</li>

						<li className='main-sidebar__menu__list__item'></li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default AsideMenu;
