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
import { PageNotFoundComponent } from './general-components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProductoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
