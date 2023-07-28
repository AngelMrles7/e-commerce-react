export interface CarouselInterface {
	id: number;
	image: string;
}

const carrouselAdapter = (carousel: any): CarouselInterface => ({
	id: carousel.carrousel_id,
	image: carousel.image,
});

export const createCarrouselAdapter = (data: any): CarouselInterface[] =>
	data.map(carrouselAdapter);
