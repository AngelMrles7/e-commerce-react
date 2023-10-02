import { ReactNode } from 'react';
import { LuChevronLeft, LuX } from 'react-icons/lu';

interface AsideNavProps {
	children: ReactNode;
	title: string;
	subtitle?: string;
	openPanel: boolean;
	closePanel: () => void;
	handleGoBack?: () => void;
	changeTitle?: boolean;
	panelDirection: 'left' | 'right';
}

const AsideNav: React.FC<AsideNavProps> = ({
	children,
	title,
	subtitle,
	openPanel,
	closePanel,
	handleGoBack,
	changeTitle,
	panelDirection = 'left',
}) => {
	return (
		<aside className={`side-nav ${openPanel ? 'open-panel' : ''}`}>
			<div className='side-nav__overlay' onClick={closePanel}></div>
			<div
				className={`side-nav__container ${
					panelDirection === 'left' ? 'left-panel' : 'right-panel'
				}`}
			>
				<div className='side-nav__menu-header'>
					<span className='side-nav__menu-header__title'>
						{changeTitle ? (
							<span
								onClick={handleGoBack}
								className='side-nav__menu-header__title--back'
							>
								<span className='side-nav__menu-header__title--back__icon'>
									<LuChevronLeft />
								</span>
								{subtitle}
							</span>
						) : (
							title
						)}
					</span>
					<button
						title='close'
						type='button'
						className='side-nav__menu-header--btn-closed'
						onClick={closePanel}
					>
						<LuX />
					</button>
				</div>
				<div className='side-nav__menu-body'>{children}</div>
			</div>
		</aside>
	);
};

export default AsideNav;
