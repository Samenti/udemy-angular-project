import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
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
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
