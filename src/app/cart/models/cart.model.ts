import { IProduct } from 'src/app/products/models/product.interface';
import { ICart } from './cart.interface';
import { ICartItem } from '../shared/models/cart-item.interface';

export class Cart implements ICart {

    constructor( public goods: ICartItem[]) {
    }

    get(): Promise<ICartItem[]> {
        return Promise.resolve(this.goods);
    }

    add(cartItem: ICartItem): number {
        const itemIndex = this._findItemIndex(cartItem);

        itemIndex > 0 ? this.goods.push(cartItem) : this.goods[itemIndex].quantity += cartItem.quantity;
        return cartItem.quantity;
    }

    private _findItemIndex(cartItem: ICartItem): number {
        return -1;
    }
}
