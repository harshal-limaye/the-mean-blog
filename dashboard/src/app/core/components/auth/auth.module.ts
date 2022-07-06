import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '@shared/modules/material/material.module';

import { LoginComponent } from './login/login.component';
import { authReducer, featureKey } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureKey, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [LoginComponent],
})
export class AuthModule {}
