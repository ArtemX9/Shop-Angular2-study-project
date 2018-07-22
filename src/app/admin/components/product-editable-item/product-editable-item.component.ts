import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/ProductModel';

@Component({
  selector: 'app-product-editable-item',
  templateUrl: './product-editable-item.component.html',
  styleUrls: ['./product-editable-item.component.css']
})
export class ProductEditableItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
