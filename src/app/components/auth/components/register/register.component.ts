import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUserRegister } from 'src/app/models/login.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Output() swapEvt = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onClickLogin(): void {
    this.swapEvt.emit();
  }

  onClickRegister(): void {
    const user: IUserRegister = {
      username: "u",
      eMail: "",
      password: "c"
    }
    this.authService.registerClient(user)
      .subscribe(
        () => this.router.navigate(["/expedienteunico/pages/home"]));
    ;
  }

}
