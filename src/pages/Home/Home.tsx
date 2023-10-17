import { ProductCard } from '../../components';
import { Carousel } from './components';

import { useProducts } from '../../services/products.services';

const Home = () => {
	const { productsQuery } = useProducts();

	return (
		<section className='main-section'>
			<Carousel />
			<section className='main-section__products'>
				{!productsQuery.isFetching &&
					productsQuery.data?.map(product => (
						<ProductCard key={product.id} data={product} />
					))}
			</section>
		</section>
	);
};

export default Home;
