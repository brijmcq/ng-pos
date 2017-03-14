import { Component } from '@angular/core';
import {IOrder} from "./models/order.model";
import {OrderService} from "./services/order.service";
import {IMenu} from "./models/menu.model";
import {MenuService} from "./services/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  orders:IOrder[];
  menu:IMenu[];
  currentDate:string = new Date().toLocaleDateString();

  constructor(
    private _orderService:OrderService,
    private _menuService:MenuService
  ) {
    this.orders = this._orderService.GetOrders();

    console.log("total", this._orderService.GetTotalOrderPrice());
  }

  onAdd(key){
    this._orderService.AddOrder(key);
  }
  onAddToOrder(key){
    console.log(key);
    this._orderService.AddToOrder(key);
  }

  onMinus(key){
    this._orderService.MinusOrder(key);
  }

  onRemoveOrder(key){
    this._orderService.DeleteOder(key);
  }





}
