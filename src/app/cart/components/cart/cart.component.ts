import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartCommunicationService } from '../../../core/services/cart-communication.service';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ICartItem } from '../../shared/models/cart-item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  get items(): ICartItem[] {
    return this.cartService.getItems();
  }

  get subtotals(): number {
    return this.cartService.getSubtotals();
  }

  private sub: Subscription;

  constructor(
    private cartCommunicationService: CartCommunicationService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.sub = this.cartCommunicationService.channel$.subscribe(item => {
      this.cartService.add(item);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
