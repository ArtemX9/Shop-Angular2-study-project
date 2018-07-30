import { Injectable } from '@angular/core';
import {LocalStorageService} from '../core/services/local-storage.service';
import {AppSettings, IAppSettings} from '../models/AppSettings';

const APP_SETTINGS = 'APP_SETTINGS';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private settings: IAppSettings;

  constructor(
    private localStorageService: LocalStorageService
    ) {
    this.settings = this.localStorageService.getItem(APP_SETTINGS);
    if (!this.settings) {
      try {
        // @ts-ignore
        const defaultSettings = require('../../assets/app-settings.json');
        this.setSettings(defaultSettings);
      } catch (e) {
        console.log(e);
      } finally {
        if (!this.settings) {
          this.setSettings(new AppSettings('http://localhost:3000'));
        }
      }

    }
  }

  private setSettings(settings: IAppSettings) {
    this.settings = settings;
    this.localStorageService.setItem(APP_SETTINGS, settings);
  }

  getApiUrl(): string {
    return this.settings.apiUrl;
  }
}

