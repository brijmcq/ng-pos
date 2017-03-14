import { Injectable } from '@angular/core';
import {IOrder} from "../models/order.model";
import {MenuService} from "./menu.service";

@Injectable()
export class OrderService {

  //dummy data
  orders:IOrder[]=[
    {
      '$key':'1',
      'name':'1 pc Chicken',
      'price':95,
      'qty':2,
    },
    {
      '$key':'2',
      'name':'Cheese Burger',
      'price':89,
      'qty':1,

    },
    {
      '$key':'3',
      'name':'Chocolate Sundae',
      'price':20,
      'qty':1,

    }


  ];
  constructor( private _menuService:MenuService) {
  }

  GetOrders():IOrder[]{
      return this.orders;
  }

  AddOrder(id){

   let resultOrder= this.orders.find( item =>
      item.$key ===id
    );

   resultOrder.qty++;

  }

  ClearOrder(){
    this.orders.length=0;
  }
  MinusOrder(id){
    let resultOrder= this.orders.find( item =>
      item.$key ===id
    );
    if(resultOrder.qty>1){
      resultOrder.qty--;
    }
    else if (resultOrder.qty===1){
      this.DeleteOder(resultOrder.$key);
    }
    else{
      console.log("warning: negative order");
    }

  }
  DeleteOder(id){
    let resultOrder = this.orders.find( item => item.$key===id);
   let orderIndex = this.orders.indexOf(resultOrder);
   if(orderIndex>-1){
     this.orders.splice(orderIndex,1);
   }
  }
  GetOrderCount():number{
    return this.orders.length;
  }

  AddToOrder(key):void{

    //check if it exists and increment by 1
   let resultOrder =  this.orders.find( item => item.$key===key);
    if(resultOrder){
      this.AddOrder(key);

    }
    else{
    let newOrder = this._menuService.GetMenuItem(key);
    this.orders.push(
      {
        '$key':newOrder.$key,
        'name':newOrder.name,
        'price':newOrder.price,
        'qty':1
      }
    );

    }
    //add if not yet in the current order
    //
    //   this.orders.push(
    //     {
    //       '$key':'1',
    //       'name':'1 pc Chicken',
    //       'price':95,
    //       'qty':2,
    //       'productCode':1
    //     }
    //   )
  }



  GetTotalOrderPrice(){
    let count = 0;
    for(let i=0, n= this.orders.length; i < n; i++)
    {
      count += (this.orders[i].qty * this.orders[i].price);
    }

    return count;
  }

}
