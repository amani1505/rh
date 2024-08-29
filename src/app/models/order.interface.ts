import { AddressInterface } from './address.interface';
import { OrderItemInterface } from './order-item.interface';
import { PaymentInterface } from './payment.interface';
import { UserInterface } from './user.interface';

export interface OrderInterface {
  id: string;
  address: AddressInterface;
  order_date: Date;
  order_items: Array<OrderItemInterface>;
  payment_method: PaymentInterface;
  status: string;
  tota_amount: number;
  user: UserInterface;
  created_at: Date;
  updated_at: Date;
}
