export interface SubcategoryInterface {
	id: number;
	name: string;
}

export interface CategoryInterface {
	id: number;
	name: string;
	created_at?: Date;
	update_at?: Date;
	status: string;
	subcategories: SubcategoryInterface[];
}
