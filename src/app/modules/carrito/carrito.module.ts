import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoService } from './services/carrito.service';


@NgModule({
  declarations: [CarritoComponent],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ],
  providers:[CarritoService]
})
export class CarritoModule { }
