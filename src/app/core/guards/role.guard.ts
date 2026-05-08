import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot): boolean | UrlTree => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const roles = route.data['roles'] as string[] | undefined;

  if (!roles || roles.length === 0 || auth.hasPermission('all')) {
    return true;
  }

  const role = auth.role();
  if (role && roles.includes(role)) {
    return true;
  }

  return router.createUrlTree(['/dashboard']);
};
