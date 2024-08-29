import { OrderInterface } from './order.interface';

export interface PaymentInterface {
  id: string;
  amount: string;
  payment_date: Date;
  payment_method: string;
  order: OrderInterface;
  created_at: Date;
  updated_at: Date;
}
