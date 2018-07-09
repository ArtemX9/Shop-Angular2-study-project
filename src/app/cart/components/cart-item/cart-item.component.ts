import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInCart} from '../../../models/ProductModel';

@Component({
  selector: 'app-cart-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() productInCart: ProductInCart;
  @Output() incrementAmount: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrementAmount: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onIncrementAmount() {
    this.incrementAmount.emit();
  }

  onDecrementAmount() {
    this.decrementAmount.emit();
  }

}
