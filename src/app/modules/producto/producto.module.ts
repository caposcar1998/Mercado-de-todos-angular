import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ProductoRoutingModule } from './producto-routing.module';
import { ConfirmarCompraComponent } from './components/confirmar-compra/confirmar-compra.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { ProductoService } from './services/producto.service';

import { CarritoComponent } from './components/carrito/carrito.component';

import { EntregasPendientesComponent } from './components/entregas-pendientes/entregas-pendientes.component';
import { ProductosAnunciadosComponent } from './components/productos-anunciados/productos-anunciados.component';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';

@NgModule({
  declarations: [ConfirmarCompraComponent, DetalleProductoComponent, RegistrarProductoComponent, CarritoComponent, EntregasPendientesComponent, ProductosAnunciadosComponent, MostrarProductoComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService]
})
export class ProductoModule { }
