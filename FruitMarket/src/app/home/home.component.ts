import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartItem, CartService } from '../services/cart.service';


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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, 
              private router: Router, private productService: ProductService,
              private activeRoute: ActivatedRoute,
              private cartService: CartService) {
    iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(res => {
      this.images = res;
    });
  }

  productHome(id: string) {
    this.router.navigate(['product/'+id]);
  }

  addToCart(item: CartItem) {
    this.cartService.addCart(item, this.cartService.cart);
  }

}
