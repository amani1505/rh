import { SubCategoryInterface } from './sub-category.interface';

export interface CategoryItemInterface {
  id: string;
  category_name: string;
  description: string;
  sub_categories: Array<SubCategoryInterface>;
  image: string;
  created_at: Date;
  updated_at: Date;
}

export interface CategoryInterface {
  data: Array<CategoryItemInterface>;
  limit: number;
  current_page: number;
  total_pages: number;
  total_items: number;
}
