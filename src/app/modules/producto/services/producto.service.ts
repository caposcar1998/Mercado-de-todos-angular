import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { DetalleProductoModel, DETALLEPRODUCTO } from 'src/app/models/detalleProducto.model';
import { ConfirmarCompraModel, CONFIRMARCOMPRA } from 'src/app/models/confirmarCompra.model';

import { CarritoModel, CARRITO } from 'src/app/models/carrito.model';

import { MostrarProductoModel, MOSTRARPRODUCTO } from 'src/app/models/mostrarProducto.model';
import { ProductosAnunciadosModel, PRODUCTOSANUNCIADOS } from 'src/app/models/productosAnunciados.model';
import { EntregasPendientesModel, ENTREGASPENDIENTES } from 'src/app/models/entregasPendientes.model';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";

import {map, retry, catchError, tap} from "rxjs/operators"
import { Producto } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  endpoint = "http://localhost:3000/api/producto";

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

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //intentar cambiar alerta
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getProductos() {
    console.log("en el servicio")
    return this.http.get<Producto[]>(this.endpoint).pipe(retry(3),catchError(this.handleError));
  }

  insertarProductos(producto: Producto) {
    this.http.post<Producto>(this.endpoint, producto).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

  updateProducto(producto: Producto, id:string){
    this.http.put<Producto>(this.endpoint+"/"+id, producto).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

  deleteProducto(id:string){
    this.http.delete(this.endpoint+"/"+id).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

}
