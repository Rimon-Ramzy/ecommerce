import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routers: Routes = [
  {
    path: '', component: SellerComponent, children: [
      { path: '', redirectTo: 'cart', pathMatch: 'full' },
      { path: 'cart', component: CartComponent },
    ]
  },
]

@NgModule({
  declarations: [
    SellerComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routers),
  ]
})
export class SellerModule { }
