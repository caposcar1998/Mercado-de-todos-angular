import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmarCompraComponent } from './components/confirmar-compra/confirmar-compra.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';

const routes: Routes = [
  {path: "confirmarCompra", component: ConfirmarCompraComponent},
  {path: "detalleProducto", component: DetalleProductoComponent},
  {path: "registrarProducto", component: RegistrarProductoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
