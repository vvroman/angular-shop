import { IProduct } from './product.interface';
import {ProductCategories} from '../shared/product-categories';

export class Product implements IProduct {

  constructor(
  public id: number,
  public name: string,
  public description: string,
  public price: number,
  public category: ProductCategories,
  public isAvailable: boolean,
  public tags: string[],
  ) {}

}
