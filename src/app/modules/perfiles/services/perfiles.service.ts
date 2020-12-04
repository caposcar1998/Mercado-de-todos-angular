import { Injectable } from '@angular/core';

import { BehaviorSubject, throwError } from 'rxjs';
import { ProfileModel, PROFILE, PROFILE2 } from 'src/app/models/profile.model';
import { VerVendedorProductoModel, VERVENDEDORPRODUCTO } from 'src/app/models/verVendedorProducto.model';
import { VerCompradorProductoModel, VERCOMPRADORPRODUCTO } from 'src/app/models/verCompradorProducto.model';

import { HistorialModel, HISTORIAL } from 'src/app/models/historial.model';
// PROFILE1 es de comprador
// PROFILE2 es de vendedor
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";

import {map, retry, catchError, tap} from "rxjs/operators"
import { Historial } from 'src/app/models/historial.model';
import { Persona } from 'src/app/models/persona.model';
@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  endpointHistorial = "http://localhost:3000/api/historial";
  endpointPersona = "http://localhost:3000/api/persona";

  private vendorProfile = new BehaviorSubject(PROFILE2);
  sharedMessageVendorProfile = this.vendorProfile.asObservable();

  private viewVendorProfile = new BehaviorSubject(PROFILE2);
  sharedMessageViewVendorProfile = this.viewVendorProfile.asObservable();

  private vendorProducts = new BehaviorSubject(VERVENDEDORPRODUCTO);
  sharedMessageVendorProducts = this.vendorProducts.asObservable();

  private customerProfile = new BehaviorSubject(PROFILE);
  sharedMessageCustomerProfile = this.customerProfile.asObservable();

  private viewCustomerProfile = new BehaviorSubject(PROFILE);
  sharedMessageViewCustomerProfile = this.viewCustomerProfile.asObservable();

  private customerSales = new BehaviorSubject(VERCOMPRADORPRODUCTO);
  sharedMessageCustomerSales = this.customerSales.asObservable();

  // Definido para landing
  private message = new BehaviorSubject('First Message');
  sharedMessage = this.message.asObservable();

  // Definido para landing
  nextMessage(message: string){
    this.message.next(message)
  }

  newVendorProfile(newProfile: ProfileModel) {
    this.vendorProfile.next(newProfile);  
  }

  newViewVendorProfile(newProfile: ProfileModel) {
    this.viewVendorProfile.next(newProfile);
  }

  newVendorProducts(newProducts: VerVendedorProductoModel[]) {
    this.vendorProducts.next(newProducts);
  }

  newCustomerProfile(newProfile: ProfileModel) {
    this.customerProfile.next(newProfile);
  }

  newViewCustomerProfile(newProfile: ProfileModel) {
    this.viewCustomerProfile.next(newProfile);
  }

  newCustomerSales(newSales: VerCompradorProductoModel[]) {
    this.customerSales.next(newSales);
  }

  // Definido para historial
  private history = new BehaviorSubject(HISTORIAL);
  sharedMessagehistory = this.history.asObservable();

  newHistory(newHistory: HistorialModel[]) {
    this.history.next(newHistory);
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

    getHistorial() {
      console.log("en el servicio")
      return this.http.get<Historial[]>(this.endpointHistorial).pipe(retry(3),catchError(this.handleError));
    }
  
    insertarHistorial(historial: Historial) {
      this.http.post<Historial>(this.endpointHistorial+"/insertar", historial).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }
  
    updateHistorial(historial: Historial, id:string){
      this.http.put<Historial>(this.endpointHistorial+"/"+id, historial).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }
  
    deleteHistorial(id:string){
      this.http.delete(this.endpointHistorial+"/"+id).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }

    getPersona() {
      console.log("en el servicio")
      return this.http.get<Persona[]>(this.endpointPersona).pipe(retry(3),catchError(this.handleError));
    }
  
    insertarPesona(persona: Persona) {
      this.http.post<Persona>(this.endpointPersona+"/insertar", persona).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }
  
    updatePersona(persona: Persona, id:string){
      this.http.put<Persona>(this.endpointPersona+"/"+id, persona).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }
  
    deletePersona(id:string){
      this.http.delete(this.endpointPersona+"/"+id).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }

    getCorreoConCorreoId(correo:string){
      this.http.get(this.endpointPersona+"/traerId"+"?correo="+correo).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }

  }
