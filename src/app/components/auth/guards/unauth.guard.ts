import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const UnauthGuard: CanActivateFn = (route, state) => {
  debugger;
  const authService: AuthService = inject(AuthService);
  return !authService.isLoggedIn();
}