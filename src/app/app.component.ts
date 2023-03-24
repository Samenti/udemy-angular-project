import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import * as fromAppStore from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { Store } from '@ngrx/store';
import { isPlatformBrowser } from '@angular/common';

export type CurrentTab = 'shopping-list' | 'recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromAppStore.AppState>,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // *** old syntax ***
      // this.store.dispatch(new AuthActions.AutoLogin());
      // *** new syntax ***
      this.store.dispatch(AuthActions.autoLoginStart());
    }
  }
}
