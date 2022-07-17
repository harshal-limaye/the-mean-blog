import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeanGridModule } from '@shared/components/mean-grid';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryFormComponent } from './category-form/category-form.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialModule,
    MeanGridModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CategoryFormComponent
  ]
})
export class CategoryModule { }
