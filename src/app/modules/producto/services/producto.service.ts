import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetalleProductoModel, DETALLEPRODUCTO, DetalleProductoInterface } from 'src/app/models/detalleProducto.model';
import { ConfirmarCompraModel, CONFIRMARCOMPRA } from 'src/app/models/confirmarCompra.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

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

  constructor() { }
}
