import { OrderInterface } from './order.interface';
import { ProductInterface } from './product.interface';

export interface OrderItemInterface {
  id: string;
  quantity: string;
  price: string;
  product: ProductInterface;
  order: OrderInterface;
  created_at: Date;
  updated_at: Date;
}
