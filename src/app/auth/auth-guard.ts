import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import * as fromAppStore from 'src/app/store/app.reducer';

export const authGuard: CanActivateFn = (next: ActivatedRouteSnapshot) => {
  const store = inject(Store<fromAppStore.AppState>);
  const router = inject(Router);
  return store.select('auth').pipe(
    take(1),
    map((authState) => authState.user),
    map((user) => {
      const isAuth = !!user;
      if (isAuth) {
        return true;
      } else {
        return router.createUrlTree(['/auth']);
      }
    })
  );
};
