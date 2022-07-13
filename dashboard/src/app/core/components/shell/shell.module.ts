import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@shared/modules/material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ShellModule { }
