import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdsComponent } from './shared/ads/ads.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { CartComponent } from './cart/cart.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './shared/category/category.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HttpClientModule } from '@angular/common/http';


const routers: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: AllProductsComponent },
      { path: 'cart', component: CartComponent },
    ]
  },
  // { path: '', component: UserComponent }
]

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AdsComponent,
    HeaderComponent,
    CartComponent,
    AllProductsComponent,
    ProductComponent,
    CategoryComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routers),
  ],
})
export class UserModule { }
