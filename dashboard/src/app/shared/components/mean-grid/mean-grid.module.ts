import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeanGridComponent } from './mean-grid.component';
import { gridReducer, featureKey } from './store/grid.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GridEffects } from './store/grid.effects';

@NgModule({
  declarations: [
    MeanGridComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, gridReducer),
    EffectsModule.forFeature([GridEffects])
  ],
  exports: [
    MeanGridComponent
  ]
})
export class MeanGridModule { }
