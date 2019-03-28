import { ICartItem } from './cart-item.interface';
import { IProduct } from 'src/app/products/models/product.interface';

export class CartItem implements ICartItem {
  constructor(public item: IProduct, public quantity: number) {}
}
