import { Outlet } from 'react-router-dom';
import AsideMenu from './components/AsideMenu/AsideMenu';
import { LuAlignJustify, LuLogOut, LuUser } from 'react-icons/lu';
import { useState } from 'react';
import { useAuthActions } from '../../hooks';

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const { authState, userLogout } = useAuthActions();
	return (
		<section className='wrapper'>
			<AsideMenu isOpenMenu={isOpenMenu} />
			<nav className='main-header'>
				<ul className='navbar'>
					<li className='navbar__item'>
						<button
							type='button'
							title='Abrir o cerra menu'
							className='toggle-button'
							onClick={() => setIsOpenMenu(!isOpenMenu)}
						>
							<LuAlignJustify />
						</button>
					</li>

					<li className='navbar__item__account'>
						<button
							type='button'
							title='user account'
							className='navbar__item__account__btn'
							onClick={() => setIsOpen(!isOpen)}
						>
							<LuUser />
						</button>

						<div className={`dropdown ${isOpen ? 'open-menu' : ''}`}>
							<ul className='dropdown__menu'>
								<li className='dropdown__menu__header'>
									<div className='dropdown__menu__header__icon'>
										<LuUser />
									</div>
									<div className='dropdown__menu__header__account'>
										<p className='dropdown__menu__header__account__name'>
											{authState.user.name}
										</p>
										<p className='dropdown__menu__header__account__email'>
											{authState.user.email}
										</p>
									</div>
								</li>
								<li className='dropdown__menu__item'>
									<button
										type='button'
										className='logout-btn'
										onClick={() => userLogout()}
									>
										<LuLogOut />
										<span>Cerrar sesión</span>
									</button>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>

			<div className='content-section'>
				<div className='content-section__main'>
					<Outlet />
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
