import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ProductoRoutingModule } from './producto-routing.module';
import { ConfirmarCompraComponent } from './components/confirmar-compra/confirmar-compra.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { ProductoService } from './services/producto.service';


@NgModule({
  declarations: [ConfirmarCompraComponent, DetalleProductoComponent, RegistrarProductoComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService]
})
export class ProductoModule { }
