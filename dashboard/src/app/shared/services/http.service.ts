import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface IResponse<T> {
  success: boolean;
  value: any;
}

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http
      .get<IResponse<T>>(url)
      .pipe(map((response) => response.value));
  }
}
