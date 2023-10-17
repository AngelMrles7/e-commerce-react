import { Status } from '.';

export interface ProductInterface {
	id: number;
	code: number;
	name: string;
	description: string;
	image: string;
	features: string;
	price: string;
	discount_price: number;
	stock: number;
	discount: string;
	status: Status;
	brand: string;
}
