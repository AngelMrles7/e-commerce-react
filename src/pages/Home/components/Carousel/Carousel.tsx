import { CarouselBtn } from '..';
import { CATEGORY_DATA } from '../../../../data/carousel';
import { useEffect, useState } from 'react';
import {
	CarouselInterface,
	createCarrouselAdapter,
} from './adapters/carrousel.adapter';

export const Carousel = () => {
	const [carrouselData, setCarrouselData] = useState<CarouselInterface[]>([]);
	const [carrouselState, setCarrouselState] = useState(0);

	useEffect(() => {
		const data = createCarrouselAdapter(CATEGORY_DATA);
		setCarrouselData(data);
	}, []);

	const nextCarousel = () =>
		carrouselState === carrouselData.length - 1
			? setCarrouselState(0)
			: setCarrouselState(carrouselState + 1);

	const prevCarousel = () =>
		carrouselState === 0
			? setCarrouselState(carrouselData.length - 1)
			: setCarrouselState(carrouselState - 1);

	const moveDot = (index: number) => {
		setCarrouselState(index);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			nextCarousel();
		}, 8000);

		return () => clearTimeout(timeout);
	}, [carrouselState]);

	return (
		<section className='carousel'>
			<div className='carousel__wrapp'>
				{carrouselData.map((data, index) => {
					return (
						<div
							key={data.id}
							className={
								carrouselState === index ? 'slide active-anim' : 'slide'
							}
						>
							<img src={data.image} alt='fotos' />
						</div>
					);
				})}
			</div>

			<CarouselBtn move={prevCarousel} direction={'prev'} />
			<CarouselBtn move={nextCarousel} direction={'next'} />
			<div className='carousel__dots'>
				{carrouselData.map((data, index) => {
					return (
						<div
							key={data.id}
							className={carrouselState === index ? 'dot active' : 'dot'}
							onClick={() => moveDot(index)}
						></div>
					);
				})}
			</div>
		</section>
	);
};
