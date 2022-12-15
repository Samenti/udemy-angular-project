import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrentTab } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() navButtonClicked = new EventEmitter<CurrentTab>();

  constructor() {}

  ngOnInit(): void {}

  public onNavClick(navLink: CurrentTab) {
    this.navButtonClicked.emit(navLink);
  }
}
