import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { LoginPayload } from './store/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login({ email, password }: LoginPayload): Observable<any> {
    return this.http.post(`${environment.apiUrl}users/auth/login`, {
      email,
      password,
    });
  }
}
