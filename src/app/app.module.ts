import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './core/http/error.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContainerModule } from './container/container.module';
import { LayoutModule } from './components/layout/layout.module';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
