import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import * as fromAppStore from 'src/app/store/app.reducer';
import * as AuthActions from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  private recipeSub: Subscription;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromAppStore.AppState>
  ) {}

  ngOnInit(): void {
    this.userSub = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
      });
  }

  onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }

  onFetchData(): void {
    this.recipeSub = this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout(): void {
    // *** old syntax ***
    // this.store.dispatch(new AuthActions.Logout());
    // *** new syntax ***
    this.store.dispatch(AuthActions.logout());
  }

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
