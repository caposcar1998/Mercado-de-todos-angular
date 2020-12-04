import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmarCompraComponent } from './components/confirmar-compra/confirmar-compra.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';

import { CarritoComponent } from './components/carrito/carrito.component';

import { EntregasPendientesComponent } from './components/entregas-pendientes/entregas-pendientes.component';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';
import { ProductosAnunciadosComponent } from './components/productos-anunciados/productos-anunciados.component';

const routes: Routes = [
  {path: "producto/confirmarCompra/:id", component: ConfirmarCompraComponent},
  {path: "producto/detalleProducto/:id", component: DetalleProductoComponent},
  {path: "producto/registrarProducto", component: RegistrarProductoComponent},

  {path: "carrito", component: CarritoComponent},

  {path: "mostrar-producto", component: MostrarProductoComponent},
  {path: "mostrar-producto/entregas-pendientes", component: EntregasPendientesComponent},
  {path: "mostrar-producto/productos-anunciados", component: ProductosAnunciadosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
