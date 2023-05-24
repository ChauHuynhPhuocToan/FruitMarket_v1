import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface CartItem{
  id: string,
  image: string[],
  text: string,
  quantity: number
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  api = "http://localhost:3000";
  cart: CartItem[] = [];
  constructor(private httpClient: HttpClient) { 
    this.getCartItems();
  }
  getCarts(): Observable<any> {
    return this.httpClient.get(this.api+"/cart");
  }

  getCartItems(): CartItem[]{
    var returnDatas: CartItem[] = [];
    this.httpClient.get(this.api+"/cart").subscribe(res => {
      var datas = res as any[];
      datas.forEach(x => {
        returnDatas.push({
          id: x.id,
          image: x.image,
          text: x.text,
          quantity: 1
        });
      });
    });
    this.resetCart(returnDatas);
    return returnDatas;
  }

  addCart(item: any, cart: any[]){
    var checkExisted = cart.findIndex(x => x.id == item.id);
    if(checkExisted != -1){
      cart[checkExisted].quantity++;
      this.resetCart(cart);
      return cart;
    }
    else {
      cart.push({
        id: item.id,
        image: item.image,
        text: item.text,
        quantity: 1
      });
      this.resetCart(cart);
      return cart;
    }
  }

  decreaseCartQuantity(item: any, cart: any[]){
    if(item.quantity == 1){
      cart = cart.filter(x => x.id != item.id);
      this.resetCart(cart);
      return cart;
    }
    else {
      var index = cart.findIndex(x => x.id == item.id);
      cart[index].quantity--;
      this.resetCart(cart);
      return cart;
    }
  }

  removeCart(item: any, cart: any[]){
    var checkExisted = cart.findIndex(x => x.id == item.id);
    if(checkExisted != -1){
      cart = cart.filter(x => x.id != item.id);
      this.resetCart(cart);
    }
    return cart;
  }

  updateCartItem(item: any, cart: any[], quantity: number) {
    var index = cart.findIndex(x => x.id == item.id);
    if(index != -1){
      cart[index].quantity = quantity;
      this.resetCart(cart);
    }
    return cart;
  }

  resetCart(cart:any[]) {
    this.cart = [];
    this.cart = [...cart]
  }

}
