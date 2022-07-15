import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu, MENUS } from './sidenav.constants';

@Component({
  selector: 'mean-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menus: IMenu[] = MENUS;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigateTo($event: IMenu): void {
    this.router.navigate([$event.path])
  }
}
