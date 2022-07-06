import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  constructor() {}

  set(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    return JSON.parse(sessionStorage.getItem(key) as any);
  }
}
