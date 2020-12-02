import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrouselComponent } from './index/carrousel/carrousel.component';
import { HeaderComponent } from './general-components/header/header.component';
import { FooterComponent } from './general-components/footer/footer.component';
import { SearchBarComponent } from './general-components/search-bar/search-bar.component';
import { LoginModule } from './modules/login/login.module';
import { ProductoModule } from './modules/producto/producto.module';
import { PerfilesModule } from './modules/perfiles/perfiles.module';
import { PageNotFoundComponent } from './general-components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './general-components/login-button/login-button.component';
import { RegisterButtonComponent } from './general-components/register-button/register-button.component';
import { LogoutButtonComponent } from './general-components/logout-button/logout-button.component';
import { HeaderLoggedComponent } from './general-components/header-logged/header-logged.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';
import {AuthHttpInterceptor} from "@auth0/auth0-angular";

@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    PageNotFoundComponent,
    LoginButtonComponent,
    RegisterButtonComponent,
    LogoutButtonComponent,
    HeaderLoggedComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProductoModule,
    PerfilesModule,
    HttpClientModule,
    StorageServiceModule,
    AuthModule.forRoot({
        ...env.auth
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
