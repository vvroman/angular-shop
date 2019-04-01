import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartItem } from '../../cart/shared/models/cart-item.interface';

@Injectable({providedIn: 'root'})
export class CartCommunicationService {

  private channel = new Subject<ICartItem>();

  public channel$ = this.channel.asObservable();

  putItem(cartItem: ICartItem) {
    this.channel.next(cartItem);
    console.log(`put to cart: ${cartItem.item.name}`);
  }
}
