import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { EntregasPendientesModel, ENTREGASPENDIENTES2 } from 'src/app/models/entregasPendientes.model';

@Component({
  selector: 'app-entregas-pendientes',
  templateUrl: './entregas-pendientes.component.html',
  styleUrls: ['./entregas-pendientes.component.scss']
})
export class EntregasPendientesComponent implements OnInit {

  pendingDeliveries: EntregasPendientesModel[];
  constructor(private mostrarProductoService: ProductoService) { }

  ngOnInit(): void {
    this.mostrarProductoService.sharedMessagePendingDeliveries.subscribe(newDeliveries => this.pendingDeliveries = newDeliveries);
  }

  updatePendingDeliveries() {
    this.mostrarProductoService.newPendingDeliveries(ENTREGASPENDIENTES2);
  }

}
