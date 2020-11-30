import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetalleProductoModel, DETALLEPRODUCTO } from 'src/app/models/detalleProducto.model';
import { ConfirmarCompraModel, CONFIRMARCOMPRA } from 'src/app/models/confirmarCompra.model';

import { CarritoModel, CARRITO } from 'src/app/models/carrito.model';

import { MostrarProductoModel, MOSTRARPRODUCTO } from 'src/app/models/mostrarProducto.model';
import { ProductosAnunciadosModel, PRODUCTOSANUNCIADOS } from 'src/app/models/productosAnunciados.model';
import { EntregasPendientesModel, ENTREGASPENDIENTES } from 'src/app/models/entregasPendientes.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // Producto
  private productDetail = new BehaviorSubject(DETALLEPRODUCTO);
  sharedMessageProductDetail = this.productDetail.asObservable();

  private purchaseConfirmation = new BehaviorSubject(CONFIRMARCOMPRA);
  sharedMessagePurchaseConfirmation = this.purchaseConfirmation.asObservable();
  
  newProductDetail(newProduct: DetalleProductoModel) {
    this.productDetail.next(newProduct);
  }

  newPurchaseConfirmation(newPurchase: ConfirmarCompraModel) {
    this.purchaseConfirmation.next(newPurchase);
  }

  // Carrito
  private cart = new BehaviorSubject(CARRITO);
  sharedMessageCart = this.cart.asObservable();

  newCart(newCart: CarritoModel[]) {
    this.cart.next(newCart);
  }

  // Mostrar-producto
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
