import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Adal8Service, Adal8Interceptor, Adal8HTTPService } from 'adal-angular8';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Adal8Service,
    { provide: Adal8HTTPService, useFactory: Adal8HTTPService.factory, deps:  [HttpClient, Adal8Service]},
    { provide: HTTP_INTERCEPTORS, useClass: Adal8Interceptor, multi: true, deps: [Adal8Service] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
