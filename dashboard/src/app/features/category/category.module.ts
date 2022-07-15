import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeanGridModule } from '@shared/components/mean-grid';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';


@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MeanGridModule
  ]
})
export class CategoryModule { }
