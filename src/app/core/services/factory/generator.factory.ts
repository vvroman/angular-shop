import { InjectionToken } from '@angular/core';

export const Generator = new InjectionToken<any[]>('Generator');

export function GeneratorFactory(count: number) {
  return (): string => {
    const dictonary =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < count; i++) {
      result += dictonary.charAt(Math.floor(Math.random() * count));
    }
    return result;
  };
}
