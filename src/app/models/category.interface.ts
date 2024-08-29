import { SubCategoryInterface } from './sub-category.interface';

export interface CategoryInterface {
  id: string;
  category_name: string;
  description: string;
  sub_categories: Array<SubCategoryInterface>;
  image: string;
  created_at: Date;
  updated_at: Date;
}
