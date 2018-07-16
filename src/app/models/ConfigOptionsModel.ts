export interface IConfigOptions {
  id: string;
  login: string;
  email: string;
}

export class ConfigOptions implements IConfigOptions {
  constructor(
    public id: string,
    public login: string,
    public email: string
  ) {}
}
