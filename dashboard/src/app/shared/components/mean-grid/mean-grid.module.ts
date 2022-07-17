import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeanGridComponent } from './mean-grid.component';
import { gridReducer, featureKey } from './store/grid.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AgGridModule } from 'ag-grid-angular';

import { GridEffects } from './store/grid.effects';
import { AgActionComponent } from './components/ag-action.component';
import { MaterialModule } from '@shared/modules/material/material.module';

@NgModule({
  declarations: [
    AgActionComponent,
    MeanGridComponent
  ],
  imports: [
    AgGridModule,
    CommonModule,
    EffectsModule.forFeature([GridEffects]),
    MaterialModule,
    StoreModule.forFeature(featureKey, gridReducer),
  ],
  exports: [
    MeanGridComponent
  ]
})
export class MeanGridModule { }
