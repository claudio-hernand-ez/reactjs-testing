/* istanbul ignore file */
import { Product } from './Product';

export interface Category {
  name: string;
  items: Product[];
}
