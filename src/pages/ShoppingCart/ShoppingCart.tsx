import { useShoppingActions } from '../../hooks/useShoppingActions';
import { currencyConverter } from '../../utils';
import CartItem from './components/CartItem/CartItem';

const ShoppingCart = () => {
	const { cart, getTotal } = useShoppingActions();

	return (
		<section className='section-cart'>
			<div className='section-cart__container'>
				<h1 className='section-cart__title'>Carrito de Compras</h1>
				<div className='section-cart__content'>
					<div className='section-cart__content__leftCol'>
						<ul className='section-cart__content__list'>
							{cart.length > 0 ? (
								cart.map(product => (
									<CartItem key={product.id} product={product} />
								))
							) : (
								<li>
									<h3 className='section-cart__content__list__message'>
										No tienes productos en el carrtios
									</h3>
								</li>
							)}
						</ul>
					</div>
					<div className='section-cart__content__rightCol'>
						<div className='section-cart__content__info'>
							<h2 className='section-cart__content__info__title'>
								Resumen del pedido
							</h2>
							<div className='section-cart__content__info__box'>
								<div className='section-cart__content__info__summary'>
									<div className='section-cart__content__info__summary__total'>
										<span className='subtotal__text'>Total estimado: </span>
										<span className='subtotal__number'>
											{currencyConverter(getTotal())}
										</span>
									</div>
								</div>

								<form action='' className='section-cart__content__info__pay'>
									<input type='text' hidden />
									<button type='submit' className=''>
										Ir a pagar
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShoppingCart;
