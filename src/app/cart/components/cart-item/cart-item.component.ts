import {ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, KeyValueDiffers, OnInit, Output} from '@angular/core';
import {ProductInCart} from '../../../models/ProductModel';

@Component({
  selector: 'app-cart-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, DoCheck {
  @Input() productInCart: ProductInCart;
  @Output() incrementAmount: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrementAmount: EventEmitter<void> = new EventEmitter<void>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  productInCartDiffer: any;

  constructor(private keValueDiffers: KeyValueDiffers) { }

  ngOnInit() {
    this.productInCartDiffer = this.keValueDiffers.find(this.productInCart).create();
  }

  ngDoCheck() {
    const changes = this.productInCartDiffer.diff(this.productInCart);
    if (changes) {
      changes.forEachChangedItem(change => this.productInCart[change.key] = change.currentValue);
    }
  }

  onIncrementAmount() {
    this.incrementAmount.emit();
  }

  onDecrementAmount() {
    this.decrementAmount.emit();
  }

  onDelete() {
    this.delete.emit();
  }

}
