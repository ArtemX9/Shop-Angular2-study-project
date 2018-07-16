import {Injectable} from '@angular/core';
import {ConfigOptions} from '../../models/ConfigOptionsModel';
import {CoreModule} from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
  private configOptions: ConfigOptions;

  constructor() {
    this.configOptions = new ConfigOptions('1234', 'login', 'email');
  }

  getConfigOptions(): ConfigOptions {
    return {...this.configOptions};
  }

  setConfigOptions(configOptions) {
    this.configOptions = configOptions;
  }

  getId(): string {
    return this.configOptions.id;
  }

  setId(id: string) {
    this.configOptions.id = id;
  }

  getLogin(): string {
    return this.configOptions.login;
  }

  setLogin(login: string) {
    this.configOptions.login = login;
  }

  getEmail(): string {
    return this.configOptions.email;
  }

  setEmail(email: string) {
    this.configOptions.email = email;
  }
}
