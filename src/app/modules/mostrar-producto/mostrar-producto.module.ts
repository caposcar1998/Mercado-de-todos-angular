import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostrarProductoRoutingModule } from './mostrar-producto-routing.module';
import { EntregasPendientesComponent } from './components/entregas-pendientes/entregas-pendientes.component';
import { ProductosAnunciadosComponent } from './components/productos-anunciados/productos-anunciados.component';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';

import { MostrarProductoService } from './services/mostrar-producto.service';

@NgModule({
  declarations: [EntregasPendientesComponent, ProductosAnunciadosComponent, MostrarProductoComponent],
  imports: [
    CommonModule,
    MostrarProductoRoutingModule
  ],
  providers: [MostrarProductoService]
})
export class MostrarProductoModule { }
