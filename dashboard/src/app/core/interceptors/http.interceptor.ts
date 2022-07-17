import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor as Interceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptor implements Interceptor {
  constructor(
    private readonly sessionStorage: SessionStorageService,
    private readonly router: Router,
    private readonly snackbar: MatSnackBar
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userInfo = this.sessionStorage.get('userInfo');
    const isOutside = req.url.indexOf('auth') !== -1;

    if (!isOutside && userInfo) {
      req = req.clone({
        setHeaders: { 'x-access-token': userInfo.token },
      });
    } else if (!userInfo) {
      this.router.navigate(['/login']);
    }

    return next.handle(req).pipe(
      catchError((error: any) => {
        this.snackbar.open(
          'Something went wrong! Please contact your administrator.',
          'Close'
        );

        return throwError(() => error);
      })
    );
  }
}
