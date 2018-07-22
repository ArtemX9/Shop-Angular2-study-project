export interface IUser {
  id: number | null;
  name: string;
  lastName: string;
  address: string;
  isAdmin: boolean;
}

export class User implements IUser {
  constructor(
    public id: number | null,
    public name: string,
    public lastName: string,
    public address: string,
    public isAdmin: boolean = false
  ) {}
}
