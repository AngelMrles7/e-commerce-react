import {
	CategoryInterface,
	SubcategoryInterface,
} from '../models/category.model';

const subCategoryAdapter = (subcategory: any): SubcategoryInterface => ({
	id: subcategory.id,
	name: subcategory.name,
});

const categoryAdapter = (category: any): CategoryInterface => ({
	id: category.category_id,
	name: category.name,
	status: category.status,
	subcategories: category.subcategories?.map(subCategoryAdapter),
});

export const createCategoriesAdapter = (data: any): CategoryInterface[] =>
	data.map(categoryAdapter);
