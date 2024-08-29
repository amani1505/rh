import { CartItemInterface } from './cart-item.interface';
import { FilesInterface } from './file.interface';
import { OrderItemInterface } from './order-item.interface';
import { ProductVariantInterface } from './procuct-variants.interface';
import { ReviewInterface } from './review.interface';
import { SubCategoryInterface } from './sub-category.interface';

export interface ProductInterface {
  id: string;
  product_name: string;
  description: string;
  price: string;
  quantity: string;
  category: SubCategoryInterface;
  brand: string;
  files: Array<FilesInterface>;
  variants: Array<ProductVariantInterface>;
  order_items: Array<OrderItemInterface>;
  cart_items: Array<CartItemInterface>;
  reviews: Array<ReviewInterface>;
  created_at: Date;
  updated_at: Date;
}
