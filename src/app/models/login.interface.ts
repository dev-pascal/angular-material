export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserAccess {
  username: string;
  token: string;
}

export interface IUserRegister {
  username: string;
  eMail: string;
  password: string;
}
