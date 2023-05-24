import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
 cart: any[] = [];
  constructor(private cartService: CartService) { 
    this.cart = this.cartService.getCartItems();
    console.log(this.cart);
  }

  ngOnInit() {
  }

  increaseQuantity(item: any){
    this.cartService.addCart(item);
  }

  descreaseQuantity(item: any){
    this.cartService.decreaseCartQuantity(item);
  }
}
