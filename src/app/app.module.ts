import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './modules/primengmodule';
import { WsfeedsComponent } from './features/wsfeeds/wsfeeds.component';
import { WsFeedsService } from './services/ws-feeds.service'
import { HttpModule } from '@angular/http';
import { RequestOptions, Http } from '@angular/http'
import { AppRoutingModule } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PingComponent } from './features/ping/ping.component';
import { HttpClient } from './services/http.client'
import { AuthenticationService } from './services/authentication.service'

@NgModule({
  declarations: [
    AppComponent,
    WsfeedsComponent,
    PingComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    AppRoutingModule
  ],
  providers: [HttpClient, AuthenticationService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
