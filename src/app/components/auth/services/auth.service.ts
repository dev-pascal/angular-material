import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUserRegister, IUserLogin, IUserAccess } from '../../../models/login.interface';
import { Router } from '@angular/router';
import { MenuHorizontalService } from '../../menu-horizontal/menu-horizontal.service';
import { of } from 'rxjs';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { AUTH_ROUTE } from 'src/app/routes/routes';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private router: Router,
    private menuHorizontalService: MenuHorizontalService,
    private localStorageService: LocalStorageService,
  ) { }

  registerClient(user: Readonly<IUserRegister>): Observable<IUserLogin> {
    return of( { username: user.username, password: user.password });
  }

  loginClient(user: Readonly<IUserLogin>): Observable<IUserAccess> {
    return of( { username: user.username, token: 'foo' })
    .pipe(
      tap(user => {
        this.localStorageService.setItem("auth_info", user);
        this.localStorageService.setItem("auth_token", user.token);
        this.menuHorizontalService.sendLoggedStatus(true);
      })
    );
  }

  isLoggedIn(): boolean {
    const token = this.localStorageService.getItem("auth_token");
    const isLoggedIn: boolean = Boolean(token);
    this.menuHorizontalService.sendLoggedStatus(isLoggedIn);
    return isLoggedIn;
  }

  getUser(): IUserAccess {
    let auth_info = this.localStorageService.getItem("auth_info");
    let user: IUserAccess = JSON.parse(
      auth_info != null ? auth_info :
      JSON.stringify({ username: '', token: '' })
    );
    return user;
  }

  logOut(): void {
    this.localStorageService.clear();
    this.menuHorizontalService.sendLoggedStatus(false);
    this.router.navigate([AUTH_ROUTE]);
  }

}
