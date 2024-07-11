import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuHorizontalModule } from '../menu-horizontal/menu-horizontal.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule,
    CommonModule,
    MenuHorizontalModule,
  ],
})
export class AuthModule { }
