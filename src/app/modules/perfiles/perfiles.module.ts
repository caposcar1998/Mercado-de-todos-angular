import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { PerfilCompradorComponent } from './components/perfil-comprador/perfil-comprador.component';
import { PerfilVendedorComponent } from './components/perfil-vendedor/perfil-vendedor.component';
import { EditarPerfilCompradorComponent } from './components/editar-perfil-comprador/editar-perfil-comprador.component';
import { EditarPerfilVendedorComponent } from './components/editar-perfil-vendedor/editar-perfil-vendedor.component';
import { VerPerfilCompradorComponent } from './components/ver-perfil-comprador/ver-perfil-comprador.component';
import { VerPerfilVendedorComponent } from './components/ver-perfil-vendedor/ver-perfil-vendedor.component';


@NgModule({
  declarations: [PerfilCompradorComponent, PerfilVendedorComponent, EditarPerfilCompradorComponent, EditarPerfilVendedorComponent, VerPerfilCompradorComponent, VerPerfilVendedorComponent],
  imports: [
    CommonModule,
    PerfilesRoutingModule
  ]
})
export class PerfilesModule { }
