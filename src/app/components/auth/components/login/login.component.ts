import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { IUserLogin } from '../../../../models/login.interface';
import { ErrorModalException } from 'src/app/shared/error-modal-exception';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() swapEvt = new EventEmitter<void>();
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onClickLogin(): void {
    const user: IUserLogin = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    if (!user.username || !user.password) {
      throw new ErrorModalException("Por favor, escriba sus credenciales");
    }
    this.authService.loginClient(user).subscribe(
      () => this.router.navigate(["/home"])
    );
  }

  onClickRegister(): void {
    this.swapEvt.emit();
  }

}
