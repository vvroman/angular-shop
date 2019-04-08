import { Injectable } from '@angular/core';
import { ConfigOptions } from 'src/app/shared/models';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configOptions: ConfigOptions;
  private storageKey = 'options';

  constructor(private storageService: LocalStorageService) {
    this.configOptions = storageService.getItem(this.storageKey);
  }

  getOptions(): ConfigOptions {
    return this.configOptions;
  }

  setOptions(options: any) {
    // TODO: check unknown keys
    this.configOptions = { ...this.configOptions, ...options };
    this.storageService.setItem(this.configOptions, this.storageKey);
  }
}
