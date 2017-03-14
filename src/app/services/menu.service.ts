import { Injectable } from '@angular/core';
import {IOrder} from "../models/order.model";
import {IMenu} from "../models/menu.model";

@Injectable()
export class MenuService {
  menu:IMenu[]=[
    {
      '$key':'1',
      'name':'1 pc Chicken',
      'price':95,
      'category':'chicken',
      'productCode':1
    },
    {
      '$key':'2',
      'name':'Cheese Burger',
      'price':89,
      'category':'burger',
      'productCode':2
    },
    {
      '$key':'3',
      'name':'Chocolate Sundae',
      'price':20,
      'category':'dessert',
      'productCode':3
    }
  ];
  constructor() {
  }

  GetMenu():IMenu[]{
    return this.menu;
  }
  GetMenuCount():number{
    return this.menu.length;
  }
  GetMenuItem(key):IMenu{

    return this.menu.find(item => item.$key=== key);

  }

}
