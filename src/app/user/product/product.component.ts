import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: any = {};
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  addedButton: boolean = false;
  amount: number = 0;

  constructor(private _service: ProductsService) {
    const cartButtons = document.querySelectorAll('.cart-button');

    cartButtons.forEach(button => {
      button.addEventListener('click', this.cartClick);
    });

    // this._service.getAllProducts().subscribe({
    //   next:
    // })

    console.log();


  }

  ngOnInit(): void {
  }

  add() {
    this.item.emit({ item: this.data, quantity: this.amount })
    // console.log(this.item.emit({ item: this.data, quantity: this.amount }));
  }
  cartClick(this: any) {
    let button = this;
    button.classList.add('clicked');
  }

  hideInputNum(e: any) {
    // let number: any = document.querySelector('.number')
    // number.style.display = 'none'
    // console.log(e.target.parentElement);
    e.target.parentElement.style.display = 'none'
    console.log(e.target.parentElement);
  }

}
