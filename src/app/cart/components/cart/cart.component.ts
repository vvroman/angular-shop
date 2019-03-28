import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICartItem } from '../../shared/models/cart-item.interface';
import { CartCommunicationService } from '../../shared/services/cart-communication.service';
import { Subscription } from 'rxjs';
import { Cart } from '../../models/cart.model';
import { CartItem } from '../../shared/models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Cart = new Cart([]);

  private sub: Subscription;

  constructor(private cartCommunicationService: CartCommunicationService) {}

  get items(): ICartItem[] {
    return this.cart.getItems();
  }

  get subtotals(): number {
    return this.cart.getSubtotals();
  }

  ngOnInit() {
    this.sub = this.cartCommunicationService.channel$.subscribe(item => {
      this.cart.add(item);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
