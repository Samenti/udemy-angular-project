import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanMatchFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs';
import * as fromAppStore from 'src/app/store/app.reducer';
import * as AuthActions from './store/auth.actions';

export const authGuard: CanMatchFn = (next: ActivatedRouteSnapshot) => {
  const store = inject(Store<fromAppStore.AppState>);
  const router = inject(Router);
  return store.select('auth').pipe(
    tap(({ user, loginStarted, loginAttempted }) => {
      if (!user && !loginStarted && !loginAttempted) {
        store.dispatch(AuthActions.autoLoginStart());
      }
    }),
    filter((authState) => authState.loginAttempted),
    map((authState) => {
      if (authState.user) {
        return true;
      } else {
        return router.createUrlTree(['/auth']);
      }
    })
  );
};
