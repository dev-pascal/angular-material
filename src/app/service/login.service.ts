import { Injectable } from '@angular/core';
import { IUserAccess } from '../models/login.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  public getUser(): IUserAccess {
    let auth_info = this.localStorageService.getItem("auth_info");
    let user: IUserAccess = JSON.parse(
      auth_info != null ? auth_info :
      JSON.stringify({username:'',token:''})
    );
    return user;
  }

}
