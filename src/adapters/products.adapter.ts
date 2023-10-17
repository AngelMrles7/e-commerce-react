import { ProductInterface } from '../models';
import { calculateFinalPrice } from '../utils/calculateFinalPrice';

export const productAdapter = (product: any): ProductInterface => ({
	id: product.product_id,
	code: product.product_code,
	name: product.product_name,
	description: product.description,
	image: product.product_img,
	features: product.features,
	price: product.price,
	discount_price: calculateFinalPrice(
		product.price,
		product.discount_percentage
	),
	stock: product.stock_quantity,
	discount: product.discount_percentage,
	status: product.status_name,
	brand: product.brand_name,
});

export const imagenAdapter = (image: any) => ({
	id: image.image_id,
	image: image.image_url,
});

export const productImageAdapter = (data: any) => ({
	product: productAdapter(data[0]),
	images: data[1].map(imagenAdapter),
});

export const createProductsAdapter = (products: any): ProductInterface[] =>
	products.map(productAdapter);
