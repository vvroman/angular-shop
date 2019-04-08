import { Injectable } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  setItem(item: any, key: string = 'defaultKey'): void {
    try {
      const storageItem = JSON.stringify(item);
      window.localStorage.setItem(key, storageItem);
    } catch (error) {
      console.error(`Can't save to localStorage: ${error}`);
    }
  }

  getItem(key: string = 'defaultKey'): any {
    let item;
    try {
      const storageItem = window.localStorage.getItem(key);
      item = JSON.parse(storageItem);
    } catch (error) {
      console.error(`Can't get from localStorage: ${error}`);
    }
    return item;
  }

  deleteItem(key: string = 'defaultKey'): void {
    try {
      const storageItem = window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Can't delete from localStorage: ${error}`);
    }
  }
}
