import { CartInterface } from './cart.interface';
import { ProductInterface } from './product.interface';

export interface CartItemInterface {
  id: string;
  product: ProductInterface;
  cart: CartInterface;
  price: string;
  quantity: string;
  created_at: Date;
  updated_at: Date;
}
