import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  errorMessage: string = '';
  products: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  categories: string[] = [];
  value: string = '';
  subscription: Subscription = new Subscription();

  constructor(private _service: ProductsService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.loading = true;
    this.subscription.add(
      this._service.getAllProducts().subscribe({
        next: (res: any) => {
          this.products = res;
          this.loading = false;
        },
        error: (err: any) => {
          this.loading = false
          this.errorMessage = err.message
        }
      })
    )
  }

  getAllCategories() {
    this.loading = true;
    this.subscription.add(
      this._service.getCategories().subscribe({
        next: (res: any) => {
          this.categories = res;
          this.loading = false
        },
        error: (err: any) => {
          this.loading = false
          this.errorMessage = err.message
        }
      })
    )
  }

  getProductsByCategory(keyword: string) {
    this.loading = true;
    this.subscription.add(
      this._service.getProductsByCategory(keyword).subscribe({
        next: (res: any) => {
          this.products = res;
          this.loading = false
        },
        error: (err: any) => {
          this.loading = false
          this.errorMessage = err.message
        }
      })
    )
  }

  filterCategory(e: any) {
    this.value = e.target.innerHTML;
    (this.value == 'all' || this.value == 'other') ? this.getAllProducts() : this.getProductsByCategory(this.value);
  }

  addToCart(e: any): any {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(item => item.item.id == e.item.id)
      if (exist) {
        // console.log(exist);
        // return false;
        alert('cc')
      } else {
        this.cartProducts.push(e);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(e);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    }
  }

}
