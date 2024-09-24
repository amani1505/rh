import { SubCategoryInterface } from './sub-category.interface';
import { ProductInterface } from './product.interface';

export interface CategoryItemInterface {
  id: string;
  category_name: string;
  description: string;
  products: Array<ProductInterface>;
  image: string;
  isPublished: boolean;
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
