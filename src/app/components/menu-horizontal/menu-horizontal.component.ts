import { Component, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { MenuHorizontalService } from './menu-horizontal.service';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.scss'],
})
export class MenuHorizontalComponent implements OnInit {
  isLoggedIn: Boolean = true;
  username?: string;

  constructor(
    private menuService: MenuHorizontalService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.menuService.getLoggedStatus().subscribe(
      (isLoggedIn: Boolean) => {
        this.isLoggedIn = isLoggedIn;
        this.username = this.authService.getUser().username;
      }
    );
  }

  logOut(): void {
    this.authService.logOut();
  }

}
