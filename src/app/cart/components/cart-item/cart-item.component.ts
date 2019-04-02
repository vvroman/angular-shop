import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICartItem } from '../../shared/models/cart-item.interface';
import { CartItem } from '../../shared/models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem;

  @Output() incQuantity = new EventEmitter<ICartItem>();
  @Output() decQuantity = new EventEmitter<ICartItem>();
  @Output() delItem = new EventEmitter<ICartItem>();

  constructor() {}

  dec() {
    this.decQuantity.emit(this.cartItem);
  }

  del() {
    this.delItem.emit(this.cartItem);
  }

  inc() {
    this.incQuantity.emit(this.cartItem);
  }

  ngOnInit() {}
}
