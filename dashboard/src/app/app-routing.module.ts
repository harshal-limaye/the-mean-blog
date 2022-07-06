import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from '@core/components/shell/shell.component';
import { LoginComponent } from '@core/components/auth/login/login.component';

const routes: Routes = [ 
  {
    path: '',
    component: ShellComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
