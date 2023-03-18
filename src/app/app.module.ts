import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import * as fromAppStore from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
// import { LoggingService } from './logging.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  // make sure you remove imports of lazy-loaded modules from here
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(fromAppStore.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule {}
