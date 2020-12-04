import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { PerfilCompradorComponent } from './components/perfil-comprador/perfil-comprador.component';
import { PerfilVendedorComponent } from './components/perfil-vendedor/perfil-vendedor.component';
import { EditarPerfilCompradorComponent } from './components/editar-perfil-comprador/editar-perfil-comprador.component';
import { EditarPerfilVendedorComponent } from './components/editar-perfil-vendedor/editar-perfil-vendedor.component';
import { VerPerfilCompradorComponent } from './components/ver-perfil-comprador/ver-perfil-comprador.component';
import { VerPerfilVendedorComponent } from './components/ver-perfil-vendedor/ver-perfil-vendedor.component';
import { PerfilesService } from './services/perfiles.service';
import { GraficasVendedorComponent } from './components/graficas-vendedor/graficas-vendedor.component';
import { GraficasCompradoresComponent } from './components/graficas-compradores/graficas-compradores.component';

import { CompradorComponent } from './components/comprador/comprador.component';
import { CompradorNuevoComponent } from './components/comprador-nuevo/comprador-nuevo.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { VendedorNuevoComponent } from './components/vendedor-nuevo/vendedor-nuevo.component';
import { LandingComponent } from './components/landing/landing.component';

import { HistorialComprasComponent } from './components/historial-compras/historial-compras.component';

@NgModule({
  declarations: [PerfilCompradorComponent, PerfilVendedorComponent, EditarPerfilCompradorComponent, EditarPerfilVendedorComponent, VerPerfilCompradorComponent, VerPerfilVendedorComponent, GraficasVendedorComponent, GraficasCompradoresComponent, CompradorComponent, CompradorNuevoComponent, VendedorComponent, VendedorNuevoComponent, LandingComponent, HistorialComprasComponent],
  imports: [
    CommonModule,
    PerfilesRoutingModule
  ],
  providers: [PerfilesService]
})
export class PerfilesModule { }
