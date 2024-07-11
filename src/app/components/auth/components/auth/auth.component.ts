import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  activeRegister: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  swapCard() {
    this.activeRegister = !this.activeRegister;
  }

}
 