/* istanbul ignore file */

import { Category } from './Category';

export interface Product {
  name: string;
  price: number;
  picture: string;
  category?: Category;
}
