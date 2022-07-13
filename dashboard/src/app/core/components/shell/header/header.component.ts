import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { logout } from '@core/components/auth/store/auth.actions';
import { AuthState } from '@core/components/auth/store/auth.selector';

@Component({
  selector: 'mean-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly store: Store<AuthState>) {}

  ngOnInit(): void {}

  logout(): void {
    this.store.dispatch(logout());
  }
}
