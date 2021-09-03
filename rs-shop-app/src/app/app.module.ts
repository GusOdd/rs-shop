import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProvideTokenInterceptor } from './core/interceptors/provide-token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ProvideTokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
