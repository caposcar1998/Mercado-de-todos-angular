import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrouselComponent } from './index/carrousel/carrousel.component';
import { SearchBarComponent } from './general-components/searchBar/search-bar/search-bar.component';
import { FooterComponent } from './general-components/footer/footer/footer.component';
import { HeaderComponent } from './general-components/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    SearchBarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
