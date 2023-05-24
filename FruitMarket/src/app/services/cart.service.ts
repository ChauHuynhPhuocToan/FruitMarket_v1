import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { discount, shippingCost } from '../AppConst';

export interface CartItem{
  id: string,
  image: string[],
  text: string,
  price: number,
  quantity: number,
  totalPrice: number;
}

export interface CartData{
  items: CartItem[],
  subtotal: number,
  total: number
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  api = "http://localhost:3000";
  cart: CartData = { items: [], subtotal: 0, total: 0 };
  constructor(private httpClient: HttpClient) { 
    this.getCartItems();
  }
  getCarts(): Observable<any> {
    return this.httpClient.get(this.api+"/cart");
  }

  getCartItems(){
    // var returnDatas: CartData = { items: [], subtotal: 0, total: 0 };
    // this.httpClient.get(this.api+"/cart").subscribe(res => {
    //   var datas = res as any[];
    //   datas.forEach(x => {
    //     returnDatas.items.push({
    //       id: x.id,
    //       image: x.image,
    //       text: x.text,
    //       price: x.price,
    //       quantity: 1,
    //       totalPrice: x.price * 1
    //     });
    //     returnDatas.subtotal += x.price * 1;
    //   });
    // });
    // returnDatas.total = returnDatas.subtotal - (returnDatas.subtotal*discount) + shippingCost;
    // this.resetCart(returnDatas);
    // return returnDatas;
    return this.cart;
  }

  addCart(item: any, cart: CartData){
    var checkExisted = cart.items.findIndex(x => x.id == item.id);
    if(checkExisted != -1){
      cart.items[checkExisted].quantity++;
      cart.items[checkExisted].totalPrice = cart.items[checkExisted].quantity * cart.items[checkExisted].price;
      cart = this.calculateCartPrices(cart);
      this.resetCart(cart);
      return cart;
    }
    else {
      cart.items.push({
        id: item.id,
        image: item.image,
        text: item.text,
        price: item.price,
        quantity: 1,
        totalPrice: item.price * 1
      });
      cart = this.calculateCartPrices(cart);
      this.resetCart(cart);
      return cart;
    }
  }

  decreaseCartQuantity(item: any, cart: CartData){
    if(item.quantity == 1){
      cart.items = [...cart.items.filter(x => x.id != item.id)];
      cart = this.calculateCartPrices(cart);
      this.resetCart(cart);
      return cart;
    }
    else {
      var index = cart.items.findIndex(x => x.id == item.id);
      cart.items[index].quantity--;
      cart.items[index].totalPrice = cart.items[index].quantity * cart.items[index].price;
      cart = this.calculateCartPrices(cart);
      this.resetCart(cart);
      return cart;
    }
  }

  removeCart(item: any, cart: CartData){
    var checkExisted = cart.items.findIndex(x => x.id == item.id);
    if(checkExisted != -1){
      cart.items = [...cart.items.filter(x => x.id != item.id)];
      cart = this.calculateCartPrices(cart);
      this.resetCart(cart);
    }
    return cart;
  }

  updateCartItem(item: any, cart: CartData, quantity: number) {
    var index = cart.items.findIndex(x => x.id == item.id);
    if(index != -1){
      cart.items[index].quantity = quantity;
      cart.items[index].totalPrice = cart.items[index].quantity * cart.items[index].price;
      cart = this.calculateCartPrices(cart);
      this.resetCart(cart);
    }
    return cart;
  }

  resetCart(cart:CartData) {
    this.cart = { items: [], subtotal: 0, total: 0 };
    this.cart = {
      items: [...cart.items],
      subtotal: cart.subtotal,
      total: cart.total
    };
  }

  calculateCartPrices(cart:CartData): CartData {
    var subtotal = cart.subtotal = 0;
    cart.total = 0;
    cart.items.forEach(x => {
      subtotal += x.price * x.quantity;
    });
    cart.subtotal = subtotal;
    cart.total = cart.subtotal - (cart.subtotal*discount) + shippingCost;
    return cart;
  }

  initialCart() {
    this.cart = { items: [], subtotal: 0, total: 0 };
  }

}
