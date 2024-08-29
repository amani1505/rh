import { ProductInterface } from './product.interface';

export interface FilesInterface {
  id: string;
  file_name: string;
  file_path: string;
  product: ProductInterface;
  created_at: Date;
  updated_at: Date;
}
