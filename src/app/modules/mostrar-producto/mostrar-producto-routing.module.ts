import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregasPendientesComponent } from './components/entregas-pendientes/entregas-pendientes.component';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';
import { ProductosAnunciadosComponent } from './components/productos-anunciados/productos-anunciados.component';

const routes: Routes = [
  {path: "", component: MostrarProductoComponent},
  {path: "entregas-pendientes", component: EntregasPendientesComponent},
  {path: "productos-anunciados", component: ProductosAnunciadosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostrarProductoRoutingModule { }
