import { OrderInterface } from './order.interface';

export interface DeliveryInterface {
  id: string;
  delivery_date: Date;
  tracking_number: string;
  status: string;
  order: OrderInterface;
  created_at: Date;
  updated_at: Date;
}
