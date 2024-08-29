import { CartItemInterface } from './cart-item.interface';
import { UserInterface } from './user.interface';

export interface CartInterface {
  id: string;
  user: UserInterface;
  cart_items: Array<CartItemInterface>;
  total_amount: number;
  created_at: Date;
  updated_at: Date;
}
