import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { discount, shippingCost } from '../../AppConst';
import { CartData } from 'src/app/services/model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: CartData = { items: [], subtotal: 0, total: 0 };
  discount = discount;
  shippingCost = shippingCost;
  total:number = 0;
  subtotal:number = 0;
 
  constructor(private cartService: CartService) { 
    
  }

  ngOnInit() {
    // this.cart = this.cartService.getCartItems();
    this.cart = this.cartService.cart;
  }

  increaseQuantity(item: any){
    this.cart = this.cartService.addCart(item, this.cart);
  }

  descreaseQuantity(item: any){
    this.cart = this.cartService.decreaseCartQuantity(item, this.cart);
  }

  updateCartItemQuantity(event: any, item: any) {
    this.cart = this.cartService.updateCartItem(item, this.cart, event.target.value);
  }

  removeCart(item: any){
    this.cart = this.cartService.removeCart(item, this.cart);
  }
}
