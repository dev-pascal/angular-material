import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './components/error404/error404.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { LoadModule } from './components/loading/load.module';
import { LoadService } from './components/loading/load.service';
import { HttpErrorInterceptor } from './components/interceptor/http-error-interceptor/http-error-interceptor';
import { LoadingInterceptor } from './components/interceptor/loading-interceptor/loading-interceptor';
import { AuthModule } from './components/auth/auth.module';
import { HttpEncoderInterceptor } from './components/interceptor/http-encoder-interceptor/http-encoder-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorModalExceptionHandler } from './shared/error-modal-exception.handler';
import { MenuHorizontalModule } from './components/menu-horizontal/menu-horizontal.module';
import { MaterialModule } from './shared/material/material.module';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    ErrorModalComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenuHorizontalModule,
    LoadModule,
    MaterialModule,
    HomeModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    LoadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpEncoderInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ErrorModalExceptionHandler
    },
  ]
})
export class AppModule { }
