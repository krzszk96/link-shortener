import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgTinyUrlModule} from 'ng-tiny-url';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LinkGetComponent } from './components/link-get/link-get.component';
import { LinkShortComponent } from './components/link-short/link-short.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkGetComponent,
    LinkShortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgTinyUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
