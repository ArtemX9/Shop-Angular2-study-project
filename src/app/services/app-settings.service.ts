import { Injectable } from '@angular/core';
import {LocalStorageService} from '../core/services/local-storage.service';
import {IAppSettings} from '../models/AppSettings';
import defaultSettings from '../../assets/app-settings.json';

const APP_SETTINGS = 'APP_SETTINGS';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private readonly settings: IAppSettings;

  constructor(
    private localStorageService: LocalStorageService
    ) {
    this.settings = this.localStorageService.getItem(APP_SETTINGS);
    if (!this.settings) {
      this.settings = defaultSettings;
      this.localStorageService.setItem(APP_SETTINGS, defaultSettings);
    }
  }

  getApiUrl(): string {
    return this.settings.apiUrl;
  }
}

