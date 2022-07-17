import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IOptions } from '@shared/components/mean-grid';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'mean-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  options: IOptions;

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.options = {
      gridId: 'categoryGrid',
      metadata: 'categories',
      endpoint: 'categories'
    };
  }

  onAction($event: any): void {
    switch ($event.action) {
      case 'create':
        this.dialog.open(CategoryFormComponent, {
          disableClose: true,
        });
        break;
    }
  }
}
