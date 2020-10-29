import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './general-components/page-not-found/page-not-found.component';
import { CarrouselComponent } from './index/carrousel/carrousel.component';

const routes: Routes = [
  {path: "", component: CarrouselComponent, data: {animation: "isLeft"} },
  {path: "login", loadChildren: "./modules/login/login.module#LoginModule", data: {animation: "isLeft"}},
  {path: "carrito", loadChildren: "./modules/carrito/carrito.module#CarritoModule",data:{animation: "isLeft"}},
  {path: "historial", loadChildren: "./modules/historial/historial.module#HistorialModule", data:{animation: "isLeft"}},
  {path: "perfiles", loadChildren: "./modules/perfiles/perfiles.module#PerfilesModule", data:{animation: "isLeft"}},
  {path: "producto", loadChildren: "./modules/producto/producto.module#ProductoModule", data:{animation: "isLeft"}},
  {path: "landing", loadChildren: "./modules/landing/landing.module#LandingModule", data:{animation: "isLeft"}},
  
  {path: "mostrar-producto", loadChildren: "./modules/mostrar-producto/mostrar-producto.module#MostrarProductoModule", data:{animation: "isLeft"}},
  {path: "**", component: PageNotFoundComponent, data:{animation: "isLeft"}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
