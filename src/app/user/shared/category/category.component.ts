import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: any[] = [];
  @Output() selectedValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(e: any) {
    let titleCat = document.querySelectorAll("#category h6")
    titleCat.forEach(e => e.classList.remove('active'))
    e.target.classList.add('active')
    this.selectedValue.emit(e)
  }
}
