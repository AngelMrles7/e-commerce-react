import { LuChevronRight } from 'react-icons/lu';
import { AsideNav, AsideNavContent, AsideNavItem } from '..';
import { Link } from 'react-router-dom';
import { CategoryInterface } from '../../../../../models';
import React, { useEffect, useState } from 'react';
import { createCategoriesAdapter } from '../../../../../adapters';
import { Data } from '../../../../../data';
interface NavigationProps {
	openPanel: boolean;
	closePanel: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
	openPanel,
	closePanel,
}) => {
	const [categories, setCategories] = useState<CategoryInterface[]>([]);
	const [selectedCategory, setSelectedCategory] =
		useState<CategoryInterface | null>(null);

	useEffect(() => {
		const categoryData = createCategoriesAdapter(Data);
		setCategories(categoryData);
	}, []);

	const handleGoBack = () => {
		setSelectedCategory(null);
	};

	return (
		<AsideNav
			openPanel={openPanel}
			closePanel={closePanel}
			title={'Menu'}
			subtitle={'Volver al inicio'}
			handleGoBack={handleGoBack}
			changeTitle={!!selectedCategory}
			panelDirection='left'
		>
			<AsideNavContent
				key={0}
				contentTitle={'Category'}
				showAll={selectedCategory ? 'Ver todos' : null}
				selectedCategory={selectedCategory?.name}
			>
				{selectedCategory !== null
					? selectedCategory.subcategories.map(category => {
							return (
								<AsideNavItem key={category.id}>
									<Link to={`/category/${category.name}`}>{category.name}</Link>
								</AsideNavItem>
							);
					  })
					: categories?.map(category => {
							return (
								<AsideNavItem
									key={category.id}
									onClick={() => {
										if (category.subcategories.length === 0) return '';
										setSelectedCategory(category);
									}}
								>
									{category.subcategories.length > 0 ? (
										<>
											<span>{category.name}</span>
											<span>
												<LuChevronRight />
											</span>
										</>
									) : (
										<Link to={`/category/${category.name}`}>
											{category.name}
										</Link>
									)}
								</AsideNavItem>
							);
					  })}
			</AsideNavContent>
		</AsideNav>
	);
};
