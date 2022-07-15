import { Component, OnInit } from '@angular/core';
import { IOptions } from '@shared/components/mean-grid';

@Component({
  selector: 'mean-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  options: IOptions;

  constructor() {}

  ngOnInit(): void {
    this.options = {
      gridId: 'categoryGrid',
      metadata: 'categories',
    };
  }
}
