import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { SliderComponent } from './common/slider/slider.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './myprofile/shopping-cart/shopping-cart.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ProfileInformationComponent } from './myprofile/profile-information/profile-information.component';
import { ManageAddressComponent } from './myprofile/manage-address/manage-address.component';
import { SavedCardsComponent } from './myprofile/saved-cards/saved-cards.component';
import { MyRewardsComponent } from './myprofile/my-rewards/my-rewards.component';
import { ReviewsRatingComponent } from './myprofile/reviews-rating/reviews-rating.component';
import { NotificationsComponent } from './myprofile/notifications/notifications.component';
import { WishlistComponent } from './myprofile/wishlist/wishlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule  } from 'ngx-skeleton-loader';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// const skltnConfig: SkltnConfig = {
//   rectRadius: 10,
//   flareWidth: '150px',
//   bgFill: '#d8d5d1',
//   flareFill: 'rgba(255,255,255, 0.5)',
// };
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    SliderComponent,
    FooterComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    ShoppingCartComponent,
    MyprofileComponent,
    ProfileInformationComponent,
    ManageAddressComponent,
    SavedCardsComponent,
    MyRewardsComponent,
    ReviewsRatingComponent,
    NotificationsComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatTreeModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    CarouselModule,
    NgxSkeletonLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
