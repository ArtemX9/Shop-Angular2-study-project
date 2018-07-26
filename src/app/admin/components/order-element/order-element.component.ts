import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../models/OrderModel';

@Component({
  selector: 'app-order-element',
  templateUrl: './order-element.component.html',
  styleUrls: ['./order-element.component.css']
})
export class OrderElementComponent implements OnInit {
  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

}
