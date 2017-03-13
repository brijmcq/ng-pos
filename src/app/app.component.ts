import { Component } from '@angular/core';
import {IOrder} from "./models/order.model";
import {OrderService} from "./services/order.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _orderService:OrderService
  ){
    this.orders = this._orderService.GetOrders();

  }
  title = 'app works!';
  orders:IOrder[];
  currentDate:string = new Date().toLocaleDateString();



}
