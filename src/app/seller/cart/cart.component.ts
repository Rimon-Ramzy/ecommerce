import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/user/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: any[] = [];
  products: any[] = [];
  total = 0;
  form!: FormGroup;
  details: any;

  constructor(private service: ProductsService, private build: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end: ['']
    })
    this.getAllCarts()
  }

  getAllCarts() {
    this.service.getAllCarts().subscribe(
      (res: any) => this.carts = res
    )
  }

  applyFilter() {
    let date = this.form.value;
    this.service.getAllCarts(date).subscribe(
      (res: any) => this.carts = res
    )
  }

  deleteCart(id: any) {
    this.service.deleteFromCarts(id).subscribe(
      (res: any) => {
        alert('Cart Deleted Success'), this.getAllCarts(), console.log(res);
      }
    )
  }

  view(index: number) {
    console.log("view");
    this.products = [];
    this.details = this.carts[index];
    for (let x in this.details.products) {
      this.service.getProductById(this.details.products[x].productId).subscribe(
        (res: any) => { this.products.push({ item: res, quantity: this.details.products[x].quantity }) }
      )
    }
  }
}
