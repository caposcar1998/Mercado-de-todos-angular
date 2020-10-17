import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComprasComponent } from './components/historial-compras/historial-compras.component';


@NgModule({
  declarations: [HistorialComprasComponent],
  imports: [
    CommonModule,
    HistorialRoutingModule
  ]
})
export class HistorialModule { }
