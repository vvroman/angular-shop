import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { ICartItem } from '../../shared/models/cart-item.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  get cartItems(): ICartItem[] {
    return this.cartService.getItems();
  }

  onIncQuantity(cartItem: ICartItem) {
    this.cartService.add({ item: cartItem.item, quantity: 1 });
  }

  onDecQuantity(cartItem: ICartItem) {
    this.cartService.dec({ item: cartItem.item, quantity: 1 });
  }
  onDelItem(cartItem: ICartItem) {
    this.cartService.delItem(cartItem);
  }

  ngOnInit() {
  }

}
