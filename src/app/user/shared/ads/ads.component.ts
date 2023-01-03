import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
// import { SwiperComponent } from "swiper/angular";


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdsComponent implements OnInit {
  config: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 5000,
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

}
