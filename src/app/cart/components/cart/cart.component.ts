import { Component, OnInit } from '@angular/core';
import { ICartItem } from '../../shared/models/cart-item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: ICartItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
