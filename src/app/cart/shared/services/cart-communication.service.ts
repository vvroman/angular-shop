import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartItem } from '../models/cart-item.interface';

@Injectable()
export class CartCommunicationService {

  private channel = new Subject<ICartItem>();

  public channel$ = this.channel.asObservable();

  putItem(cartItem: ICartItem) {
    this.channel.next(cartItem);
    console.log(cartItem);
  }
}
