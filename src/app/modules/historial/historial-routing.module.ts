import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComprasComponent } from './components/historial-compras/historial-compras.component';


const routes: Routes = [
  {path: "historial-compras", component: HistorialComprasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }
