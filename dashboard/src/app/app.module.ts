import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from '@core/components/shell/shell.module';
import { AuthModule } from '@core/components/auth/auth.module';
import { reducers, metaReducers } from './reducers';
import { environment } from '@env/environment';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { InterceptorModule } from '@core/interceptors/interceptor.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    NoopAnimationsModule,
    ShellModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
