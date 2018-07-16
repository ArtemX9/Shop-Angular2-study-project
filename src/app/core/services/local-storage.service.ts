import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private localStorage = window.localStorage;

  constructor() { }

  setItem(key: string, item: any) {
    this.localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): any {
    const item = this.localStorage.getItem(key);
    return JSON.parse(item);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }
}
