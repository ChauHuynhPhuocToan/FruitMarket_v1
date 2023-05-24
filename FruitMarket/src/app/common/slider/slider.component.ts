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
      animateOut: 'bounceOutRight',
      animateIn: 'bounceInLeft',
      items: 1, 
      dots: true, 
      loop:true,
      margin:10,
      autoplay:true,
    //  animateOut: 'fadeOut',
      autoHeight: true
  }
  
 
  images = [
    
   
  ];
 
  constructor(private homeService: HomeService) { 
    this.homeService.getBanners().subscribe(res => {
      this.images = res;
    })
  }

  ngOnInit() {
  }


}
