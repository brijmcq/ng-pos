import { Injectable } from '@angular/core';
import {IOrder} from "../models/order.model";

@Injectable()
export class OrderService {
  orders:IOrder[]=[
    {
      '$key':'1',
      'name':'1 pc Chicken',
      'price':95,
      'qty':2,
      'productCode':1
    },
    {
      '$key':'2',
      'name':'Cheese Burger',
      'price':89,
      'qty':1,
      'productCode':2
    },
    {
      '$key':'3',
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

  AddOrder(id){

  }
  MinusOrder(){

  }
  DeleteOder(){

  }

  GetTotalOrderPrice(){
    let count = 0;
    for(let i=0, n= this.orders.length; i < n; i++)
    {
      count += (this.orders[i].qty * this.orders[i].price);
      console.log("the count is ", count);
    }

    return count;
  }

}
