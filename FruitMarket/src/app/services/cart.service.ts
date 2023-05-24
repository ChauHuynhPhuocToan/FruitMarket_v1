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
        this.cart = [];
        this.cart.push({
          id: x.id,
          image: x.image,
          text: x.text,
          quantity: 1
        });
      });
    });
    
   
   
    return returnDatas;
  }

  addCart(item: any){
    var checkExisted = this.cart.findIndex(item.id);
    if(checkExisted != -1){
      this.cart[checkExisted].quantity++;
    }
    else {
      this.cart.push({
        id: item.id,
        image: item.image,
        text: item.text,
        quantity: 1
      });
    }
  }

  decreaseCartQuantity(item: any){
    if(item.quantity == 1){
      this.cart = this.cart.filter(x => x.id != item.id);
    }
    else {
      var index = this.cart.findIndex(item.id);
      this.cart[index].quantity--;
    }
  }

  removeCart(item: any){
    var checkExisted = this.cart.findIndex(item.id);
    if(checkExisted != -1){
      this.cart = this.cart.filter(x => x.id != item.id);
    }
  }


}
