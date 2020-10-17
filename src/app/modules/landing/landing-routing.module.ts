import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompradorComponent } from './components/comprador/comprador.component';
import { CompradorNuevoComponent } from './components/comprador-nuevo/comprador-nuevo.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { VendedorNuevoComponent } from './components/vendedor-nuevo/vendedor-nuevo.component';

const routes: Routes = [
  {path: "comprador", component: CompradorComponent},
  {path: "compradorNuevo", component: CompradorNuevoComponent},
  {path: "vendedor", component: VendedorComponent},
  {path: "vendedorNuevo", component: VendedorNuevoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
