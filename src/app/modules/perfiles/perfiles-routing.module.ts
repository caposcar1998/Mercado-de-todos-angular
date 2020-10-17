import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarPerfilCompradorComponent } from './components/editar-perfil-comprador/editar-perfil-comprador.component';
import { EditarPerfilVendedorComponent } from './components/editar-perfil-vendedor/editar-perfil-vendedor.component';
import { PerfilCompradorComponent } from './components/perfil-comprador/perfil-comprador.component';
import { PerfilVendedorComponent } from './components/perfil-vendedor/perfil-vendedor.component';
import { VerPerfilCompradorComponent } from './components/ver-perfil-comprador/ver-perfil-comprador.component';
import { VerPerfilVendedorComponent } from './components/ver-perfil-vendedor/ver-perfil-vendedor.component';


const routes: Routes = [
  {path: "editar-perfil-comprador", component: EditarPerfilCompradorComponent },
  {path: "editar-perfil-vendedor", component: EditarPerfilVendedorComponent },
  {path: "perfil-comprador", component: PerfilCompradorComponent },
  {path: "perfil-vendedor", component: PerfilVendedorComponent },
  {path: "ver-perfil-comprador", component: VerPerfilCompradorComponent },
  {path: "ver-perfil-vendedor", component: VerPerfilVendedorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }
