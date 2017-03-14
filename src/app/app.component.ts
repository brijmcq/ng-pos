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
  chickenMenu:IMenu[];
  burgerMenu:IMenu[];
  dessertMenu:IMenu[];

  currentDate:string = new Date().toLocaleDateString();

  constructor(
    private _orderService:OrderService,
    private _menuService:MenuService
  ) {
    this.orders = this._orderService.GetOrders();
    this.chickenMenu = this._menuService.GetMenu('chicken');
    this.burgerMenu = this._menuService.GetMenu('burger');
    this.dessertMenu = this._menuService.GetMenu('dessert');

    console.log("burger menu", this.burgerMenu);

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
