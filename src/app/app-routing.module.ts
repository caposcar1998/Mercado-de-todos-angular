import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './general-components/page-not-found/page-not-found.component';
import { SearchBarComponent } from './general-components/search-bar/search-bar.component';

const routes: Routes = [
  {path: "", component: SearchBarComponent},
  {path: "login", loadChildren: "./modules/login/login.module#LoginModule"},
  {path: "producto", loadChildren: "./modules/producto/producto.module#ProductoModule"},
  {path: "**", component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
