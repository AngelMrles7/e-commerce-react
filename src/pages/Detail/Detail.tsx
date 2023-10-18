import ImageGallery from './components/ImageGallery';
import { LuShoppingCart } from 'react-icons/lu';
import Counter from '../../components/Counter/Counter';
import { useShoppingActions } from '../../hooks/useShoppingActions';
import { useParams } from 'react-router-dom';
import { convertPercent, currencyConverter } from '../../utils';
import { useState } from 'react';
import { useProductDetails } from './hooks/useProductDetail';

const Detail = () => {
	const { productId = '0' } = useParams();
	const { productQuery } = useProductDetails(+productId);
	const { getProductQuantity, incrementsQuantity } = useShoppingActions();
	const productQuantity = getProductQuantity(+productId);

	const [quantityInCart, setQuantityInCart] = useState(productQuantity);

	return (
		<section className='detail-section'>
			<section className='detail-section__content'>
				{productQuery.data?.images.length > 0 && (
					<ImageGallery images={productQuery.data?.images} />
				)}
				<div className='product-detail'>
					<div className='product-detail__title'>
						<h4 className='product-detail__title__brand'>
							{productQuery.data?.product.brand}
							<span className='product-detail__title__code'>
								Código: {productQuery.data?.product.code}
							</span>
						</h4>
						<h1 className='product-detail__title__name'>
							{productQuery.data?.product.name}
						</h1>
						<div className='product-detail__title__feature'>
							<p>{productQuery.data?.product.features}</p>
						</div>
					</div>
					<div className='product-detail__price'>
						<p className='product-detail__price__now'>
							{productQuery.data?.product.discount_price}

							{convertPercent(productQuery.data?.product.discount) > 0 && (
								<span className='product-detail__price__discount'>
									{convertPercent(productQuery.data?.product.discount)}%
								</span>
							)}
						</p>

						{convertPercent(productQuery.data?.product.discount) > 0 && (
							<p className='product-detail__price__before'>
								{currencyConverter(Number(productQuery.data?.product.price))}
							</p>
						)}
					</div>
					<div className='product-detail__action'>
						{productQuery.data && (
							<Counter
								maxValue={productQuery.data?.product.stock}
								state={quantityInCart}
								handleDecrement={() => setQuantityInCart(quantityInCart - 1)}
								handleIncrement={() => setQuantityInCart(quantityInCart + 1)}
							/>
						)}

						{productQuery.data && (
							<button
								type='button'
								className='product-detail__action__add'
								onClick={() =>
									incrementsQuantity(productQuery.data?.product, quantityInCart)
								}
								disabled={productQuantity >= productQuery.data?.product.stock}
							>
								<LuShoppingCart /> Add Cart
							</button>
						)}
					</div>
				</div>
			</section>
			<section className='detail-section__description'>
				<div>
					<h2 className='detail-section__description__subtitle'>Descripcion</h2>
					<p className='detail-section__description__info'>
						{productQuery.data?.product.description}
					</p>
				</div>
			</section>
		</section>
	);
};

export default Detail;
