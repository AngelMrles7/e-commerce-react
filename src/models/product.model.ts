import { Status } from '.';

export interface ProductInterface {
	id: number;
	code: number;
	name: string;
	description: string;
	image: string;
	features: string;
	precie: number;
	stock: number;
	guarantee: string;
	status_name: Status;
	brand_name: number;
	category_name: number;
}
