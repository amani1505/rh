// import { RoleEnum } from 'src/enum/role.enum';
import { OrderInterface } from './order.interface';
import { CartInterface } from './cart.interface';
import { AddressInterface } from './address.interface';

export interface UserInterface {
  id: string;
  username: string;
  email: string;
  password: string;
  phone_number: string;
  roles: string;
  addressess: Array<AddressInterface>;
  orders: Array<OrderInterface>;
  cart: CartInterface;
  created_at: Date;
  updated_at: Date;
}
