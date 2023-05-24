import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('drawer', {static: false}) drawer!: MatSidenav;
  title = 'e-comm';
  
  toggelNavbar () {
    this.drawer.toggle();
  }

  sideNavMenu = [
    {
      title: 'home',
      link: '/home'
    },
    {
      title: 'products',
      link: '/products'
    },
    {
      title: 'images',
      link: ''
    },
    {
      title: 'contact-us',
      link: ''
    }
  ];

  constructor(private cartService: CartService) {
    this.cartService.initialCart();
  }
}
