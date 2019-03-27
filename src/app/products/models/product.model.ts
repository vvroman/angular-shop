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
