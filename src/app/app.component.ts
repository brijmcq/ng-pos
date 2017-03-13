import { Component } from '@angular/core';
import {IOrder} from "./models/order.model";
import {OrderService} from "./services/order.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  orders:IOrder[];
  currentDate:string = new Date().toLocaleDateString();

  constructor(
    private _orderService:OrderService
  ) {
    this.orders = this._orderService.GetOrders();

    console.log("total", this._orderService.GetTotalOrderPrice());
  }

  onAdd(key){
    console.log('key : ', key);
  }

  onMinus(key){
    console.log('key : ', key);
  }





}
