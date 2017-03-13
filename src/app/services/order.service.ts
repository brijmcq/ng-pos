import { Injectable } from '@angular/core';
import {IOrder} from "../models/order.model";

@Injectable()
export class OrderService {
  orders:IOrder[]=[
    {
      'name':'1 pc Chicken',
      'price':95,
      'qty':2,
      'productCode':1
    },
    {
      'name':'Cheese Burger',
      'price':89,
      'qty':1,
      'productCode':2
    },
    {
      'name':'Chocolate Sundae',
      'price':20,
      'qty':1,
      'productCode':3
    }


  ];
  constructor() {
  }

  GetOrders():IOrder[]{
      return this.orders;
  }

}
