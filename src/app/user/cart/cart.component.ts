import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit {
  cartProducts: any[] = [];
  total: any = 0;
  success: boolean = false;
  wtotal: number = 0;


  constructor(private _service: ProductsService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  ngAfterViewInit(): void {
    console.log(this._service.getFev());
  }

  get() {
    this.cartProducts.map((el) => {
      this.wtotal += el.quantity
    })

  }
  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      this.get();
      this._service.ubdateFav(this.wtotal)


    }
    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    for (let i in this.cartProducts) {
      this.total += this.cartProducts[i].item.price * this.cartProducts[i].quantity
    }
  }

  addAmount(i: any) {
    this.cartProducts[i].quantity++;
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minsAmount(i: any) {
    this.cartProducts[i].quantity--;
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  detectChange() {
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  deleteProduct(i: number) {
    this.cartProducts.splice(i, 1)
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  addCart() {
    let products = this.cartProducts.map(item => {
      return { productId: item.id, quantity: item.quantity }
    })
    let Model = {
      userId: 5,
      date: new Date,
      products: products,
    }
    this._service.createNewCart(Model).subscribe({
      next: (res: any) => this.success = true
    })
  }

}
