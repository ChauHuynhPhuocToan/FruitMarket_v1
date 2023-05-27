import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Ilogin';
import { LoginService } from 'src/app/services/login.service';
import { HomeService } from 'src/app/services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  carouselOptions: OwlOptions = 
    {
      items: 1, 
      loop: true,
      autoplay: true,
      center: true,
      dots: false,
      autoHeight: true,
      autoWidth: true,
      margin:10,
      animateIn: 'bounceInLeft',
      animateOut: 'fadeOut'
  }
  
 
  images: any[] = [];
 
  constructor(private homeService: HomeService) { 
    this.homeService.getBanners().subscribe(res => {
      this.images = res;
    })
  }

  ngOnInit() {
  }


}
