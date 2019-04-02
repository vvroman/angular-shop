import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartItem } from '../../cart/shared/models/cart-item.interface';

@Injectable({providedIn: 'root'})
export class CartCommunicationService {
  private goods: ICartItem[] = [];

  // private channel = new Subject<ICartItem>();

  // public channel$ = this.channel.asObservable();

  // putItem(cartItem: ICartItem) {
  //   console.log("add Item");
    
  //   this.channel.next(cartItem);
  // }
  
  add(cartItem: ICartItem): number {
    const itemIndex = this.goods.findIndex(v => v.item.id === cartItem.item.id);
    itemIndex < 0
      ? this.goods.push(cartItem)
      : (this.goods[itemIndex].quantity += cartItem.quantity);
    return this.goods.length;
  }

  delItem(cartItem: ICartItem): number {
    const itemIndex = this.goods.findIndex(v => v.item.id === cartItem.item.id);
    if (itemIndex > 0) {
      this.goods.splice(itemIndex, 1);
    }
    return this.goods.length;
  }

  getItems(): ICartItem[] {
    return this.goods;
  }

  getItemsCount(): number {
    return this.goods.reduce((acc, item) => (acc += item.quantity), 0);
  }

  getSubtotals(): number {
    return this.goods.reduce(
      (acc, val) => (acc += val.item.price * val.quantity),
      0
    );
  }

}
