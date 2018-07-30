export interface IAppSettings {
  apiUrl: string;
}

export class AppSettings implements IAppSettings {
  constructor(public apiUrl: string) {
  }

}
