import {
	CategoryInterface,
	SubcategoryInterface,
} from '../models/category.model';

const subCategoryAdapter = (subcategory: any): SubcategoryInterface => ({
	id: subcategory.subcategory_id,
	name: subcategory.subcategory_name,
});

const categoryAdapter = (category: any): CategoryInterface => ({
	id: category.category_id,
	name: category.category_name,
	status: category.status_id,
	subcategories: category.subcategories?.map(subCategoryAdapter),
});

export const createCategoriesAdapter = (data: any): CategoryInterface[] =>
	data?.map(categoryAdapter);
