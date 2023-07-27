import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface AsideNavContentProps {
	children: ReactNode;
	contentTitle?: string;
	showAll?: string | null;
	selectedCategory?: string | null;
}

export const AsideNavContent: React.FC<AsideNavContentProps> = ({
	children,
	contentTitle,
	showAll,
	selectedCategory,
}) => {
	return (
		<ul className='side-nav__content'>
			{contentTitle && (
				<li className='side-nav__content__title'>
					<p>{contentTitle}</p>
				</li>
			)}
			{!!showAll && (
				<li className='side-nav__content__showAll'>
					<Link to={`/category/${selectedCategory}`}>{showAll}</Link>
				</li>
			)}

			{children}
		</ul>
	);
};
