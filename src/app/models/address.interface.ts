import { OrderInterface } from './order.interface';
import { UserInterface } from './user.interface';

export interface AddressInterface {
  id: string;
  city: string;
  country: string;
  address: string;
  users: Array<UserInterface>;
  order: OrderInterface;
  created_at: Date;
  updated_at: Date;
}
