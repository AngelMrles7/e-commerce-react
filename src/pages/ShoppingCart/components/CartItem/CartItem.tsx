import { FC } from 'react';
import { CartItemInterface } from '../../../../appState/states/shoppingState';
import { convertPercent, currencyConverter } from '../../../../utils';
import Counter from '../../../../components/Counter/Counter';
import { useShoppingActions } from '../../../../hooks/useShoppingActions';
import { Link } from 'react-router-dom';
interface CartItemProps {
	product: CartItemInterface;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
	const { increaseAmount, decreaseAmount } = useShoppingActions();

	return (
		<li className='cart-item'>
			<div className='cart-item__product'>
				<div className='cart-item__product__box'>
					{/* Enviar a la vits show  */}
					<Link to={`/product/${product.id}`}>
						<img src={product.image} alt={product.name} />
					</Link>
				</div>

				<div className='cart-item__product__info'>
					<p className='cart-item__product__info__code'>Code: {product.code}</p>
					{/* Enviar a la vits show  */}
					<Link to={`/product/${product.id}`}>
						<p className='cart-item__product__info__name'>{product.name}</p>
					</Link>
				</div>
			</div>

			<div className='cart-item__product__price'>
				{convertPercent(product.discount) > 0 && (
					<p className='cart-item__product__price__discount'>
						{currencyConverter(Number(product.price))}
					</p>
				)}

				<p className='cart-item__product__price__current'>
					{currencyConverter(product.discount_price)}
					{convertPercent(product.discount) > 0 && (
						<span className='product-detail__price__discount'>
							{convertPercent(product.discount)}%
						</span>
					)}
				</p>
			</div>
			<div className='cart-item__option'>
				<Counter
					minValue={0}
					maxValue={product.stock}
					state={product.quantity}
					handleDecrement={() => decreaseAmount(product)}
					handleIncrement={() => increaseAmount(product)}
				/>
			</div>
		</li>
	);
};

export default CartItem;
