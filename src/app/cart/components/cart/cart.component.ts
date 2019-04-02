import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICartItem } from '../../shared/models/cart-item.interface';
import { CartCommunicationService } from 'src/app/core/services/cart-communication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {


  private sub: Subscription;

  constructor(private cartService: CartCommunicationService) {}
  
  get items(): ICartItem[] {
    return this.cartService.getItems();
  }

  get subtotals(): number {
    return this.cartService.getSubtotals();
  }
}
