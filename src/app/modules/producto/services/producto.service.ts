import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';


// Borrar imports desde aquí

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
import { RegistrarProductoModel } from 'src/app/models/registrarProducto.model';
import { CatalogoProducto, Catalogos } from 'src/app/models/catalogo.model'
import { CarritoProductos } from 'src/app/models/carritoProductos.model'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  endpointCarritoOrdenes = "http://localhost:3000/api/carritoOrdenes";
  endpointCarritos = "http://localhost:3000/api/carritos";
  endpointProducto = "http://localhost:3000/api/producto";
  endpointProductoSearch = "http://localhost:3000/api/producto/search";
  endpointCatalogoProducto = "http://localhost:3000/api/catalogoProducto";
  endpointCatalogos = "http://localhost:3000/api/catalogos";
  endpointCarritoProductos = "http://localhost:3000/api/carritoProductos";
  
  /***
   * 
   * Borrar desde aquí
   */
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
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

    console.log("en el servicio")
    return this.http.get<CarritoOrdenes[]>(this.endpointCarritoOrdenes).pipe(retry(3),catchError(this.handleError));
  }

  insertarCarritoOrdenes(carritoOrdenes: CarritoOrdenes) {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.post<CarritoOrdenes>(this.endpointCarritoOrdenes+"/insertar", carritoOrdenes,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCarritoOrdenes(carritoOrdenes: CarritoOrdenes, id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.put<CarritoOrdenes>(this.endpointCarritoOrdenes+"/"+id, carritoOrdenes,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCarritoOrdenes(id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.delete(this.endpointCarritoOrdenes+"/"+id,{ headers }).subscribe({
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
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

    console.log("en el servicio")
    return this.http.get<Carritos[]>(this.endpointCarritos,{ headers }).pipe(retry(3),catchError(this.handleError));
  }

  insertarCarritos(carritos: Carritos) {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.post<Carritos>(this.endpointCarritos+"/insertar", carritos,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCarritos(carritos: Carritos, id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.put<Carritos>(this.endpointCarritos+"/"+id, carritos,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCarritos(id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.delete(this.endpointCarritos+"/"+id,{ headers }).subscribe({
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
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }
    return this.http.get<ProductoModel[]>(this.endpointProducto,{ headers }
        ).pipe(retry(3),catchError(this.handleError));
  }

  getProductosId(id: String) {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }
    console.log(this.endpointProducto+"/"+id);
    return this.http.get<ProductoModel>(this.endpointProducto+"/"+id,{ headers }).pipe(retry(3),catchError(this.handleError));
  }

  getProductoSearch(search: String) {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }
    return this.http.get<ProductoModel[]>(this.endpointProductoSearch+"?nombre="+search,{ headers }).pipe(retry(3),catchError(this.handleError));
  }

  insertarProductos(producto: ProductoModel) {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }
    this.http.post<ProductoModel>(this.endpointProducto+"/insertar", producto,{ headers }).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

  registrarProducto(producto: RegistrarProductoModel) {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }
    this.http.post<RegistrarProductoModel>(this.endpointProducto+"/insertar", producto,{ headers }).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

  updateProducto(producto: ProductoModel, id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

    this.http.put<ProductoModel>(this.endpointProducto+"/"+id, producto,{ headers }).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }

  deleteProducto(id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

    this.http.delete(this.endpointProducto+"/"+id,{ headers }).subscribe({
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
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

    console.log("en el servicio")
    return this.http.get<CatalogoProducto[]>(this.endpointCatalogoProducto,{ headers }).pipe(retry(3),catchError(this.handleError));
  }

  insertarCatalogoProducto(catalogoProducto: CatalogoProducto) {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.post<CatalogoProducto>(this.endpointCatalogoProducto+"/insertar", catalogoProducto,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCatalogoProducto(catalogoProducto: CatalogoProducto, id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.put<CatalogoProducto>(this.endpointCatalogoProducto+"/"+id, catalogoProducto,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCatalogoProducto(id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.delete(this.endpointCatalogoProducto+"/"+id,{ headers }).subscribe({
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
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

    console.log("en el servicio")
    return this.http.get<Catalogos[]>(this.endpointCatalogos,{ headers }).pipe(retry(3),catchError(this.handleError));
  }

  insertarCatalogos(catalogos: Catalogos) {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.post<Catalogos>(this.endpointCatalogos+"/insertar", catalogos,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCatalogos(catalogos: Catalogos, id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.put<Catalogos>(this.endpointCatalogos+"/"+id, catalogos,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCatalogos(id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.delete(this.endpointCatalogos+"/"+id,{ headers }).subscribe({
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
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

    console.log("en el servicio")
    return this.http.get<CarritoProductos[]>(this.endpointCarritoProductos,{ headers }).pipe(retry(3),catchError(this.handleError));
  }

  insertarCarritoProductos(carritoProductos: CarritoProductos) {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.post<CarritoProductos>(this.endpointCarritoProductos+"/insertar", carritoProductos,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  updateCarritoProductos(carritoProductos: CarritoProductos, id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.put<CarritoProductos>(this.endpointCarritoProductos+"/"+id, carritoProductos,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }

  deleteCarritoProductos(id:string){
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.delete(this.endpointCarritoProductos+"/"+id,{ headers }).subscribe({
          next: data => {
              console.log("datos",data)
          },
          error: error => {

              console.error(' error!', error);
          }
      })
  }
}
