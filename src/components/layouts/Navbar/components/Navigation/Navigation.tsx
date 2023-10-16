import { LuChevronRight } from 'react-icons/lu';
import { AsideNav, AsideNavContent, AsideNavItem } from '..';
import { Link } from 'react-router-dom';
import { CategoryInterface } from '../../../../../models';
import React, { useState } from 'react';
import { useCategories } from '../../../../../services';

interface NavigationProps {
	openPanel: boolean;
	closePanel: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
	openPanel,
	closePanel,
}) => {
	const { categoriesQuery } = useCategories();

	const [selectedCategory, setSelectedCategory] =
		useState<CategoryInterface | null>(null);

	const handleGoBack = () => {
		setSelectedCategory(null);
	};

	const close = () => {
		closePanel();
		setSelectedCategory(null);
	};

	return (
		<AsideNav
			openPanel={openPanel}
			closePanel={close}
			title={'Menu'}
			subtitle={'Volver al inicio'}
			handleGoBack={handleGoBack}
			changeTitle={!!selectedCategory}
			panelDirection='left'
		>
			<AsideNavContent
				contentTitle={selectedCategory ? selectedCategory?.name : ''}
			>
				{selectedCategory && (
					<li className='side-nav__content__showAll'>
						<Link
							to={`/category/cat${selectedCategory.id}`}
							onClick={closePanel}
						>
							ver todo
						</Link>
					</li>
				)}
				{selectedCategory !== null
					? selectedCategory.subcategories.map(category => {
							return (
								<AsideNavItem key={category.id}>
									<Link
										to={`/category/cat${
											selectedCategory.id
										}/${category.name.replace(/ /g, '-')}`}
										onClick={close}
									>
										{category.name}
									</Link>
								</AsideNavItem>
							);
					  })
					: categoriesQuery.data?.map(category => (
							<AsideNavItem
								key={category.id}
								onClick={() => setSelectedCategory(category)}
								rightIcon={<LuChevronRight />}
							>
								{category.name}
							</AsideNavItem>
					  ))}
			</AsideNavContent>
		</AsideNav>
	);
};
