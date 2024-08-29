import { CategoryInterface } from './category.interface';
import { ProductInterface } from './product.interface';

export interface SubCategoryInterface {
  id: string;
  sub_category_name: string;
  description: string;
  category: CategoryInterface;
  products: Array<ProductInterface>;
  created_at: Date;
  updated_at: Date;
}
