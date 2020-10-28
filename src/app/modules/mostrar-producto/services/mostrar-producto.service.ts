import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MostrarProductoModel, MOSTRARPRODUCTO } from 'src/app/models/mostrarProducto.model';
import { ProductosAnunciadosModel, PRODUCTOSANUNCIADOS } from 'src/app/models/productosAnunciados.model';
import { EntregasPendientesModel, ENTREGASPENDIENTES } from 'src/app/models/entregasPendientes.model';

@Injectable({
  providedIn: 'root'
})
export class MostrarProductoService {

  private showProducts = new BehaviorSubject(MOSTRARPRODUCTO);
  sharedMessageShowProducts = this.showProducts.asObservable();

  private announceProducts = new BehaviorSubject(PRODUCTOSANUNCIADOS);
  sharedMessageAnnounceProducts = this.announceProducts.asObservable();

  private pendingDeliveries = new BehaviorSubject(ENTREGASPENDIENTES);
  sharedMessagePendingDeliveries = this.pendingDeliveries.asObservable();

  newShowProducts(newProducts: MostrarProductoModel[]) {
    this.showProducts.next(newProducts);
  }

  newAnnounceProducts(newProducts: ProductosAnunciadosModel[]) {
    this.announceProducts.next(newProducts);
  }

  newPendingDeliveries(newDeliveries: EntregasPendientesModel[]) {
    this.pendingDeliveries.next(newDeliveries);
  }

  constructor() { }
}
