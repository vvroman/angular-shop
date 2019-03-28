import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.interface';

import { productsMock } from '../mocks/products.mock';

@Injectable({ providedIn: 'root'})
export class ProductsService {
  getProducts(): Promise<IProduct[]> {
    return Promise.resolve(productsMock);
  }
}
