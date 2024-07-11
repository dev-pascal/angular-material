import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { AuthRoutes, AuthService } from "../services/auth.service";

export const AuthGuard: CanActivateFn = (route, state): boolean|UrlTree => {
  debugger;
  const authService: AuthService = inject(AuthService);
  const isLoggedIn: boolean = authService.isLoggedIn();
  if (!isLoggedIn) {
    const router: Router = inject(Router);
    const tree: UrlTree = router.parseUrl(AuthRoutes.ROOT);
    return tree;
  }
  return isLoggedIn;
}
