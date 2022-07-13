import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromAction from './auth.actions';
import { AuthService } from '../auth.service';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Injectable()
export class AuthEffects {
  sessionKey = 'userInfo';

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAction.login),
      switchMap((data) =>
        this.auth.login(data).pipe(
          map((response) => {
            this.sessionStorage.set(this.sessionKey, response.value);

            return fromAction.success(response.value);
          }),
          catchError(() => of({ type: '[Login Screen] Failure' }))
        )
      )
    )
  );

  redirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAction.success),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAction.logout),
        tap(() => {
          this.sessionStorage.delete(this.sessionKey);
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly sessionStorage: SessionStorageService
  ) {}
}
