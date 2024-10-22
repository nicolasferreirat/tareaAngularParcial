import { FetchBackend } from '@angular/common/http';
import { CanActivateFn, Router } from '@angular/router';
import { FetchService } from '../services/fetch.service';
import { inject } from '@angular/core';

export const loggedGuard: CanActivateFn = async (route, state) => {
  const fetchService: FetchService = inject(FetchService);
  const router: Router = inject(Router);

  if (fetchService.loggedUser()) {
    return true;
  }

  await router.navigate(['/auth/login']);
  return false;
};
