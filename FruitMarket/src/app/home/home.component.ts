import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselOptions1: OwlOptions = {
    items: 4, 
    dots: false,  
    center: true,
    loop:true,
    margin:10,
    autoplay:true,
    animateOut: 'fadeOut',
    autoHeight: true,
  }
  carouselOptions: OwlOptions = 
  {
    items: 1, 
    dots: false, 
    center: true,
    loop:true,
    margin:10,
    autoplay:true,
    animateOut: 'fadeOut',
    autoHeight: true,
  }
  images: any[] = [];
  default = new Array(4);

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private productService: ProductService, private activeRoute: ActivatedRoute) {
  
    // this.productService.getAllProducts().subscribe(res => {
    //   this.images = res;
    // });
    // this.images = this.activeRoute.snapshot.data['data'];
    // console.log(this.activeRoute.snapshot.data['data']);
    iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(res => {
      this.images = res;
      console.log(this.images);
    });
  }

  productHome(id: string) {
    this.router.navigate(['product/'+id]);
    }

}
