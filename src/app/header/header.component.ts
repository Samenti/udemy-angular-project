import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  recipeSub: Subscription;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}

  onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }

  onFetchData(): void {
    this.recipeSub = this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }
}
