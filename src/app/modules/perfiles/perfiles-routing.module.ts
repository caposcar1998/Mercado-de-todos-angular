import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarPerfilCompradorComponent } from './components/editar-perfil-comprador/editar-perfil-comprador.component';
import { EditarPerfilVendedorComponent } from './components/editar-perfil-vendedor/editar-perfil-vendedor.component';
import { PerfilCompradorComponent } from './components/perfil-comprador/perfil-comprador.component';
import { PerfilVendedorComponent } from './components/perfil-vendedor/perfil-vendedor.component';
import { VerPerfilCompradorComponent } from './components/ver-perfil-comprador/ver-perfil-comprador.component';
import { VerPerfilVendedorComponent } from './components/ver-perfil-vendedor/ver-perfil-vendedor.component';

import { CompradorComponent } from './components/comprador/comprador.component';
import { CompradorNuevoComponent } from './components/comprador-nuevo/comprador-nuevo.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { VendedorNuevoComponent } from './components/vendedor-nuevo/vendedor-nuevo.component';
import { LandingComponent } from './components/landing/landing.component';

import { HistorialComprasComponent } from './components/historial-compras/historial-compras.component';


const routes: Routes = [
  {path: "perfiles/editar-perfil-comprador", component: EditarPerfilCompradorComponent },
  {path: "perfiles/editar-perfil-vendedor", component: EditarPerfilVendedorComponent },
  {path: "perfiles/perfil-comprador", component: PerfilCompradorComponent },
  {path: "perfiles/perfil-vendedor", component: PerfilVendedorComponent },
  {path: "perfiles/ver-perfil-comprador", component: VerPerfilCompradorComponent },
  {path: "perfiles/ver-perfil-vendedor", component: VerPerfilVendedorComponent },

  {path: "landing", component: LandingComponent},
  {path: "landing/comprador", component: CompradorComponent},
  {path: "landing/compradorNuevo", component: CompradorNuevoComponent},
  {path: "landing/vendedor", component: VendedorComponent},
  {path: "landing/vendedorNuevo", component: VendedorNuevoComponent},

  {path: "historial", component: HistorialComprasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }
