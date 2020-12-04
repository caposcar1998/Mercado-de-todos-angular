import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';


// Borrar imports desde aquí
import { ConfirmarCompraModel, CONFIRMARCOMPRA } from 'src/app/models/confirmarCompra.model';

import { CarritoModel, CARRITO } from 'src/app/models/carrito.model';

import { ProductosAnunciadosModel, PRODUCTOSANUNCIADOS } from 'src/app/models/productosAnunciados.model';
import { EntregasPendientesModel, ENTREGASPENDIENTES } from 'src/app/models/entregasPendientes.model';
// Hasta acá


import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";

import {map, retry, catchError, tap} from "rxjs/operators";
import {CarritoOrdenes, Carritos } from 'src/app/models/carrito.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { CatalogoProducto, Catalogos } from 'src/app/models/catalogo.model'
import { CarritoProductos } from 'src/app/models/carritoProductos.model'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  endpointCarritoOrdenes = "http://localhost:3000/api/carritoOrdenes";
  endpointCarritos = "http://localhost:3000/api/carritos";
  endpointProducto = "http://localhost:3000/api/producto";
  endpointCatalogoProducto = "http://localhost:3000/api/catalogoProducto";
  endpointCatalogos = "http://localhost:3000/api/catalogos";
  endpointCarritoProductos = "http://localhost:3000/api/carritoProductos";
  
  /***
   * 
   * Borrar desde aquí
   */
  // ProductoModel
  private purchaseConfirmation = new BehaviorSubject(CONFIRMARCOMPRA);
  sharedMessagePurchaseConfirmation = this.purchaseConfirmation.asObservable();
  
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

  private announceProducts = new BehaviorSubject(PRODUCTOSANUNCIADOS);
  sharedMessageAnnounceProducts = this.announceProducts.asObservable();

  private pendingDeliveries = new BehaviorSubject(ENTREGASPENDIENTES);
  sharedMessagePendingDeliveries = this.pendingDeliveries.asObservable();

  newAnnounceProducts(newProducts: ProductosAnunciadosModel[]) {
    this.announceProducts.next(newProducts);
  }

  newPendingDeliveries(newDeliveries: EntregasPendientesModel[]) {
    this.pendingDeliveries.next(newDeliveries);
  }

  /***
   * Borrar hasta acá
   */

  //
  // Manejo de APIs
  //

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

  // API - CarritoOrdenes
  getCarritoOrdenes() {
    console.log("en el servicio")
    return this.http.get<CarritoOrdenes[]>(this.endpointCarritoOrdenes).pipe(retry(3),catchError(this.handleError));
  }

  insertarCarritoOrdenes(carritoOrdenes: CarritoOrdenes) {
      this.http.post<CarritoOrdenes>(this.endpointCarritoOrdenes+"/insertar", carritoOrdenes).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCarritoOrdenes(carritoOrdenes: CarritoOrdenes, id:string){
      this.http.put<CarritoOrdenes>(this.endpointCarritoOrdenes+"/"+id, carritoOrdenes).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCarritoOrdenes(id:string){
      this.http.delete(this.endpointCarritoOrdenes+"/"+id).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  // API - Carritos
  getCarritos() {
    console.log("en el servicio")
    return this.http.get<Carritos[]>(this.endpointCarritos).pipe(retry(3),catchError(this.handleError));
  }

  insertarCarritos(carritos: Carritos) {
      this.http.post<Carritos>(this.endpointCarritos+"/insertar", carritos).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCarritos(carritos: Carritos, id:string){
      this.http.put<Carritos>(this.endpointCarritos+"/"+id, carritos).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCarritos(id:string){
      this.http.delete(this.endpointCarritos+"/"+id).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  

  // API - Productos
  getProductos() {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Indjb0x2NXhmenQ4dGFxQU94MVF1WSJ9.eyJpc3MiOiJodHRwczovL2Rldi16Z2xjbWhuby51cy5hdXRoMC5jb20vIiwic3ViIjoiMk5zTW14R0xnTmJEdjhVaTc3Z002akFZUWczczJrSkRAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJpYXQiOjE2MDcxMDMyMTIsImV4cCI6MTYwNzE4OTYxMiwiYXpwIjoiMk5zTW14R0xnTmJEdjhVaTc3Z002akFZUWczczJrSkQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.wlbjs8pXrjgxHd6OxuYaAq9AW_urf20HxfGf7PLwX9B3AAy8EvS5DWzpsvyPU0AWC0ckNh6ht0hBCW1RYItUKfmapNeyOIhY0Jyjaz5ZNaozpQUwwLUqquLnbjsBuf3ZlFSGqu5ItFtDQuXzWOYZHx9KB8qEfwMkEZ-7pJno8w1gcIr6r4U3uE9VLR-XyIIFXSttIh0XlNS81fPMbgBtaEjxx2_5WPRakKutmNF1w2WsNeE1bODFH7RDybqDDlMTsUpTrNRUPWLIbG6GJU98bogBIBaU9I0ffEweNrZfLk8Pb9QBAB7zP8ypMj7eRVh2xeKHySLwFqt0ovuZoaH1aw', "Content-Type": "application/x-www-form-urlencoded" }
    return this.http.get<ProductoModel[]>(this.endpointProducto,{ headers }
        ).pipe(retry(3),catchError(this.handleError));
  }

  getProductosId(id: String) {
    console.log("en el servicio")
    console.log("Ruta solicitada en detalle-producto");
    console.log(this.endpointProducto+"/"+id);
    return this.http.get<ProductoModel>(this.endpointProducto+"/"+id,).pipe(retry(3),catchError(this.handleError));
  }

  insertarProductos(producto: ProductoModel) {
    this.http.post<ProductoModel>(this.endpointProducto+"/insertar", producto).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

  updateProducto(producto: ProductoModel, id:string){
    this.http.put<ProductoModel>(this.endpointProducto+"/"+id, producto).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

  deleteProducto(id:string){
    this.http.delete(this.endpointProducto+"/"+id).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

  // API - CatalogoProducto
  getCatalogoProducto() {
    console.log("en el servicio")
    return this.http.get<CatalogoProducto[]>(this.endpointCatalogoProducto).pipe(retry(3),catchError(this.handleError));
  }

  insertarCatalogoProducto(catalogoProducto: CatalogoProducto) {
      this.http.post<CatalogoProducto>(this.endpointCatalogoProducto+"/insertar", catalogoProducto).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCatalogoProducto(catalogoProducto: CatalogoProducto, id:string){
      this.http.put<CatalogoProducto>(this.endpointCatalogoProducto+"/"+id, catalogoProducto).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCatalogoProducto(id:string){
      this.http.delete(this.endpointCatalogoProducto+"/"+id).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  // API - Catalogos
  getCatalogos() {
    console.log("en el servicio")
    return this.http.get<Catalogos[]>(this.endpointCatalogos).pipe(retry(3),catchError(this.handleError));
  }

  insertarCatalogos(catalogos: Catalogos) {
      this.http.post<Catalogos>(this.endpointCatalogos+"/insertar", catalogos).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCatalogos(catalogos: Catalogos, id:string){
      this.http.put<Catalogos>(this.endpointCatalogos+"/"+id, catalogos).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCatalogos(id:string){
      this.http.delete(this.endpointCatalogos+"/"+id).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  // API - CarritoProductos
  getCarritoProductos() {
    console.log("en el servicio")
    return this.http.get<CarritoProductos[]>(this.endpointCarritoProductos).pipe(retry(3),catchError(this.handleError));
  }

  insertarCarritoProductos(carritoProductos: CarritoProductos) {
      this.http.post<CarritoProductos>(this.endpointCarritoProductos+"/insertar", carritoProductos).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCarritoProductos(carritoProductos: CarritoProductos, id:string){
      this.http.put<CarritoProductos>(this.endpointCarritoProductos+"/"+id, carritoProductos).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCarritoProductos(id:string){
      this.http.delete(this.endpointCarritoProductos+"/"+id).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }
}
