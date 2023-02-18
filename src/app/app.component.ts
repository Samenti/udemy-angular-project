import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

export type CurrentTab = 'shopping-list' | 'recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) // private loggingService: LoggingService
  {}

  ngOnInit(): void {
    this.authService.autoLogin();
    // this.loggingService.printLog('Hello from AppComponent ngOnInit!');
  }
}
