import { IProduct } from 'src/app/products/models/product.interface';
import { ICart } from './cart.interface';
import { ICartItem } from '../shared/models/cart-item.interface';

export class Cart implements ICart {

    constructor( public goods: ICartItem[]) {
    }

    add(cartItem: ICartItem): number {
        const itemIndex = this.goods.findIndex(v => v.item.id === cartItem.item.id);
        itemIndex < 0 ? this.goods.push(cartItem) : this.goods[itemIndex].quantity += cartItem.quantity;
        return cartItem.quantity;
    }

    getItems(): ICartItem[] {
        return this.goods;
    }

    getSubtotals(): number {
       return this.goods.reduce((acc, val) => acc += val.item.price * val.quantity, 0);
    }


}
