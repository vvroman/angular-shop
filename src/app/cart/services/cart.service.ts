import { Injectable } from '@angular/core';
import { ICartItem } from '../shared/models/cart-item.interface';

@Injectable({ providedIn: 'root'})
export class CartService {
  private goods: ICartItem[] = [];

  add(cartItem: ICartItem): number {
    const itemIndex = this.goods.findIndex(v => v.item.id === cartItem.item.id);
    itemIndex < 0
      ? this.goods.push(cartItem)
      : (this.goods[itemIndex].quantity += cartItem.quantity);
    return cartItem.quantity;
  }

  getItems(): ICartItem[] {
    return this.goods;
  }
  getSubtotals(): number {
    return this.goods.reduce(
      (acc, val) => (acc += val.item.price * val.quantity),
      0
    );
  }
}
