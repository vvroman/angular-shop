import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartItem } from '../../cart/shared/models/cart-item.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private goods: ICartItem[] = [];
  private storageKey = 'userCart';

  constructor(private localStorageService: LocalStorageService) {
    this.goods = this.localStorageService.getItem(this.storageKey);
  }

  add(cartItem: ICartItem): number {
    const itemIndex = this.goods.findIndex(v => v.item.id === cartItem.item.id);
    itemIndex < 0
      ? this.goods.push(cartItem)
      : (this.goods[itemIndex].quantity += cartItem.quantity);
    this.updateStorage();
    return this.goods.length;
  }

  dec(cartItem: ICartItem): number {
    const itemIndex = this.goods.findIndex(v => v.item.id === cartItem.item.id);
    if (itemIndex >= 0) {
      this.goods[itemIndex].quantity > cartItem.quantity
        ? (this.goods[itemIndex].quantity -= cartItem.quantity)
        : this.delItem(cartItem);
    }
    this.updateStorage();
    return this.goods.length;
  }

  delItem(cartItem: ICartItem): number {
    const itemIndex = this.goods.findIndex(v => v.item.id === cartItem.item.id);
    if (itemIndex >= 0) {
      this.goods.splice(itemIndex, 1);
    }
    this.updateStorage();
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

  private updateStorage() {
    this.localStorageService.setItem(this.goods, this.storageKey);
  }
}
