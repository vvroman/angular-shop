import { ProductCategories } from './../shared/constants';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategories;
  isAvailable: boolean;
  tags: Array<string>;
}
