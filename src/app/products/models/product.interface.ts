import { ProductCategories } from '../shared/product-categories';

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    category: ProductCategories;
    isAvailable: boolean;
    tags: Array<string>;
  }
