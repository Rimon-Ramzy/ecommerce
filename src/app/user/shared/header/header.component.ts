import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  cart: number = 0;
  constructor(private productsService: ProductsService) { }


  ngAfterViewInit(): void {

    this.cart = this.productsService.getFev().value
    console.log(this.cart);

  }

  ngOnInit(): void {
  }



  getTotalCart() {
    this.cart = JSON.parse(localStorage.getItem('cart')!).length;
  }

}
