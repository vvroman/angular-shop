import { IProduct } from 'src/app/products/models/product.interface';
import { ICart } from './cart.interface';
import { ICartItem } from '../shared/models/cart-item.interface';

export class Cart implements ICart {

    constructor( public goods: ICartItem[]) {
    }
}
