import { ProductCard } from '../../components';
import { AsideFilter, DropDown, DropDownItem, useProductBrands } from '.';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { useProductFilter } from './hooks/useProductFilter';

const Category = () => {
	const { categoryId, subcategoryName } = useParams();
	const [page, setPage] = useState(1);
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

	useEffect(() => {
		setPage(1);
	}, [selectedBrands?.length]);

	const { productQuery } = useProductFilter(
		categoryId,
		subcategoryName,
		selectedBrands,
		page
	);
	const { brandsQuery } = useProductBrands(categoryId);

	const onBrandChange = (brandId: string) => {
		selectedBrands?.includes(brandId)
			? setSelectedBrands(selectedBrands.filter(brand => brand != brandId))
			: setSelectedBrands([...selectedBrands, brandId]);
	};

	return (
		<section className='category-section'>
			<div className='category-section__container'>
				<AsideFilter>
					<DropDown title='Marcas'>
						{brandsQuery.data?.map(brand => {
							return (
								<DropDownItem
									key={brand.brand_id}
									id={brand.brand_id}
									name={brand.brand_name}
									value={brand.brand_id}
									onChange={brandId => onBrandChange(brandId)}
								/>
							);
						})}
					</DropDown>
				</AsideFilter>
				<section className='category-section__display'>
					<div className='category-section__display__pagination'>
						<span className='category-section__display__pagination__result'>
							Resultados: {productQuery.data?.tota_items}
						</span>
						<ReactPaginate
							breakLabel='...'
							nextLabel='>'
							onPageChange={e => setPage(e.selected + 1)}
							pageRangeDisplayed={2}
							marginPagesDisplayed={2}
							forcePage={page - 1}
							pageCount={productQuery?.data?.last_page}
							onPageActive={selected => console.warn(selected)}
							previousLabel='<'
							renderOnZeroPageCount={null}
							containerClassName='pagination'
						/>
					</div>
					<div className='category-section__display__content'>
						<ul className='category-section__display__content__product-list'>
							{productQuery.data?.data.map(product => (
								<ProductCard key={product.id} data={product} />
							))}
						</ul>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Category;
