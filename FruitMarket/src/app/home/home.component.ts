import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../services/cart.service';
import { CartData, CartItem } from '../services/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselOptions1: OwlOptions = {
    items: 4, 
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    animateOut: 'fadeOut'
  }
  carouselOptions: OwlOptions = 
  {
    items: 1, 
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    animateOut: 'fadeOut'
  }
  images: any[] = [];
  default = new Array(4);

  cart: CartData = { items: [], subtotal: 0, total: 0 };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, 
              private router: Router, private productService: ProductService,
              private activeRoute: ActivatedRoute,
              private cartService: CartService) {
    iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(res => {
      if(this.cartService.cart.items != null && this.cartService.cart.items.length > 0){
        res.forEach(x => {
          var index = this.cartService.cart.items.findIndex(i => i.id == x.id);
          this.images.push({
            id: x.id,
            image: x.image,
            text: x.text,
            price: x.price,
            quantity: index != -1 ? this.cartService.cart.items[index].quantity : null
          });
        });
      } else {
        res.forEach(x => {
          this.images.push({
            id: x.id,
            image: x.image,
            text: x.text,
            price: x.price,
            quantity: null
          });
        });
      }
    });
  }

  productHome(id: string) {
    this.router.navigate(['product/'+id]);
  }

  addToCart(item: CartItem) {
    this.cartService.addCart(item, this.cartService.cart);
    this.updateQuantityItem(item.id);
  }

  increaseQuantity(item: any){
    this.cartService.cart = this.cartService.addCart(item, this.cartService.cart);
    this.updateQuantityItem(item.id);
  }

  descreaseQuantity(item: any){
    this.cartService.cart = this.cartService.decreaseCartQuantity(item, this.cartService.cart);
    this.updateQuantityItem(item.id);
  }

  updateCartItemQuantity(event: any, item: any) {
    this.cartService.cart = this.cartService.updateCartItem(item, this.cartService.cart, event.target.value);
    this.updateQuantityItem(item.id);
  }

  updateQuantityItem(id: string) {
    var index = this.images.findIndex(x => x.id == id);
    var itemIndex = this.cartService.cart.items.findIndex(x => x.id == id);
    this.images[index].quantity = this.cartService.cart.items[itemIndex].quantity;
    this.images = [...this.images];
  }

}
