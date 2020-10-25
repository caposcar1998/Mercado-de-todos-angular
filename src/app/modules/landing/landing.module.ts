import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { CompradorComponent } from './components/comprador/comprador.component';
import { CompradorNuevoComponent } from './components/comprador-nuevo/comprador-nuevo.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { VendedorNuevoComponent } from './components/vendedor-nuevo/vendedor-nuevo.component';
import { LandingComponent } from './components/landing/landing.component';

import { LandingService } from './services/landing.service';



@NgModule({
  declarations: [CompradorComponent, CompradorNuevoComponent, VendedorComponent, VendedorNuevoComponent, LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  providers: [LandingService]
})
export class LandingModule { }
