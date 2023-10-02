import { ReactNode } from 'react';
interface AsideNavContentProps {
	children: ReactNode;
	contentTitle?: string;
}

export const AsideNavContent: React.FC<AsideNavContentProps> = ({
	children,
	contentTitle,
}) => {
	return (
		<ul className='side-nav__content'>
			{contentTitle && (
				<li className='side-nav__content__title'>
					<p>{contentTitle}</p>
				</li>
			)}

			{children}
		</ul>
	);
};
