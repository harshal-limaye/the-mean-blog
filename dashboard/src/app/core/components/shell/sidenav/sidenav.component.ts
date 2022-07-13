import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mean-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menus = ['Posts', 'Categories', 'Comments', 'Users'];

  constructor() {}

  ngOnInit(): void {}
}
