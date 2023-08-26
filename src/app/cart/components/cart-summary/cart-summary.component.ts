import { Component, Input } from '@angular/core';
import { Cart } from '../../interfaces/cart.interface';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent {
  @Input()
  cart!: Cart;
}
