import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './general-components/page-not-found/page-not-found.component';
import { SearchBarComponent } from './general-components/search-bar/search-bar.component';
import { CarrouselComponent } from './index/carrousel/carrousel.component';

const routes: Routes = [
  {path: "", component: CarrouselComponent},
  {path: "login", loadChildren: "./modules/login/login.module#LoginModule"},

  {path: "historial", loadChildren: "./modules/historial/historial.module#HistorialModule"},
  {path: "perfiles", loadChildren: "./modules/perfiles/perfiles.module#PerfilesModule"},
  {path: "producto", loadChildren: "./modules/producto/producto.module#ProductoModule"},
  {path: "landing", loadChildren: "./modules/landing/landing.module#LandingModule"},
  {path: "carrito", loadChildren: "./modules/carrito/carrito.module#CarritoModule"},
  {path: "mostrar-producto", loadChildren: "./modules/mostrar-producto/mostrar-producto.module#MostrarProductoModule"},
  {path: "**", component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
