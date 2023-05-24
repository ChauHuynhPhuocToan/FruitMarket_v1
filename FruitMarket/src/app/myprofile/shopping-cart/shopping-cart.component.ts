import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: CartItem[] = [];
  display:boolean = true;
 
  constructor(private cartService: CartService) { 
    this.cart = this.cartService.getCartItems();
    console.log(this.cart);
  }

  ngOnInit() {
  }

  increaseQuantity(item: any){
    this.cart = [...this.cartService.addCart(item, this.cart)]; 
  }

  descreaseQuantity(item: any){
    this.cart = [...this.cartService.decreaseCartQuantity(item, this.cart)];
  }

  updateCartItemQuantity(event: any, item: any) {
    this.cart = [...this.cartService.updateCartItem(item, this.cart, event.target.value)];
  }

  removeCart(item: any){
    this.cart = [...this.cartService.removeCart(item, this.cart)];
  }
}
