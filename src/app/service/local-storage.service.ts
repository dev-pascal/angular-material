import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItemAsObject(key: string): any {
    return JSON.parse(localStorage.getItem(key)!);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: any): void {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  clear(): void {
    localStorage.clear();
  }

}
