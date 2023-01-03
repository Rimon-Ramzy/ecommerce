import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './user/home/home.component';

const routes: Routes = [
  // { path: '/user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) },
  { path: 'seller', loadChildren: () => import('src/app/seller/seller.module').then(m => m.SellerModule) }
  // loadChildren: () => import('./components/user-module/user-module.module').then(m => m.UserModuleModule)
  // { path: 'user', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
