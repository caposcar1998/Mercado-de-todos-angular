import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
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
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/storage";


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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProductoModule,
    PerfilesModule,
    HttpClientModule,
    StorageServiceModule,
    AuthModule.forRoot({
        ...env.auth,
               // Request this audience at user authentication time
      audience: 'https://dev-zglcmhno.us.auth0.com/api/v2/',
      // Request this scope at user authentication time
      scope: 'read:current_user',
      // Specify configuration for the interceptor
      httpInterceptor: {
      allowedList: [
      {
        // Match any request that starts 'https://dev-qz51ohsc.auth0.com/api/v2/' (note the asterisk)
        uri: 'https://dev-zglcmhno.us.auth0.com/api/v2/*',
        tokenOptions: {
        // The attached token should target this audience
        audience: 'https://dev-zglcmhno.us.auth0.com/api/v2/',

        // The attached token should have these scopes
        scope: 'read:current_user'
      }
    }
  ]
}
    }),
    AngularFireStorageModule,
    AngularFireModule.initializeApp(env.firebase)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
