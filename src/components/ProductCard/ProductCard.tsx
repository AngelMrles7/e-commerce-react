import { Link } from 'react-router-dom';
import { useShoppingActions } from '../../hooks/useShoppingActions';
import { ProductInterface } from '../../models';
import { convertPercent, currencyConverter } from '../../utils';

interface ProductCardInterface {
	key: number;
	data: ProductInterface;
}

const ProductCard: React.FC<ProductCardInterface> = ({ data }) => {
	const { addCartProduct, getProductQuantity } = useShoppingActions();
	const productQuantity = getProductQuantity(+data.id);

	return (
		<div className='product-card'>
			<Link to={`/product/${data.id}`} className='product-card__link'>
				<div className='product-card__info'>
					<div className='product-card__info__img'>
						<img src={data.image} alt={data.name} />
					</div>
					{convertPercent(data.discount) > 0 && (
						<span className='product-card__info__discount'>
							-{convertPercent(data.discount)}%
						</span>
					)}

					<div className='product-card__info__wrapp'>
						<div className='product-card__info__detail'>
							<h5 className='product-card__info__brand'>{data.brand}</h5>
							<p className='product-card__info__name'>{data.name}</p>
						</div>
						<div className='product-card__info__price'>
							{convertPercent(data.discount) > 0 && (
								<p className='product-card__info__price__discount'>
									{currencyConverter(Number(data.price))}
								</p>
							)}

							<p className='product-card__info__price__current'>
								{currencyConverter(data.discount_price)}
							</p>
						</div>
					</div>
				</div>
			</Link>
			<button
				title='Agregar producto al carrito'
				type='button'
				className='product-card__button'
				onClick={() => addCartProduct(data)}
				disabled={productQuantity >= data.stock}
			>
				Agregar al carrito
			</button>
		</div>
	);
};

export default ProductCard;
