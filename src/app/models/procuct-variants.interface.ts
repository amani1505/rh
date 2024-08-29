import { ProductInterface } from './product.interface';

export interface ProductVariantInterface {
  id: string;
  variant_name: string;
  product: Array<ProductInterface>;
  value: string;
  created_at: Date;
  updated_at: Date;
}
