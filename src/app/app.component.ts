import { Component, OnInit } from '@angular/core';
import * as fromAppStore from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { Store } from '@ngrx/store';

export type CurrentTab = 'shopping-list' | 'recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromAppStore.AppState>) {}

  ngOnInit(): void {
    // *** old syntax ***
    // this.store.dispatch(new AuthActions.AutoLogin());
    // *** new syntax ***
    this.store.dispatch(AuthActions.autoLogin());
  }
}
