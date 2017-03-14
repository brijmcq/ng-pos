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
    },
    {
      '$key':'4',
      'name':'1 pc Chicken with Spaghetti',
      'price':120,
      'category':'chicken',
      'productCode':1
    },
    {
      '$key':'5',
      'name':'2 pc Chicken',
      'price':135,
      'category':'chicken',
      'productCode':1
    },
    {
      '$key':'6',
      'name':'Caramel Sundae',
      'price':20,
      'category':'dessert',
      'productCode':3
    }
  ];
  constructor() {
  }

  GetMenuAll():IMenu[]{
    return this.menu;
  }
  GetMenu(category):IMenu[]{
    return this.menu.filter(item => item.category===category);
  }

  GetMenuCount():number{
    return this.menu.length;
  }
  GetMenuItem(key):IMenu{

    return this.menu.find(item => item.$key=== key);

  }

}
