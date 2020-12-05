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
import { PersonaBasic } from 'src/app/models/personaBasic.model';
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
      const token = localStorage.getItem('token')
      const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      return this.http.get<Historial[]>(this.endpointHistorial,{ headers }).pipe(retry(3),catchError(this.handleError));
    }
  
    insertarHistorial(historial: Historial) {
      const token = localStorage.getItem('token')
      const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.post<Historial>(this.endpointHistorial+"/insertar", historial,{ headers }).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }
  
    updateHistorial(historial: Historial, id:string){
      const token = localStorage.getItem('token')
      const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.put<Historial>(this.endpointHistorial+"/"+id, historial,{ headers }).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }
  
    deleteHistorial(id:string){
      const token = localStorage.getItem('token')
      const headers = { 'Authorization':  `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.delete(this.endpointHistorial+"/"+id,{ headers }).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }

    getPersona() {
      const token = localStorage.getItem('token')
      const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      return this.http.get<Persona[]>(this.endpointPersona,{ headers }).pipe(retry(3),catchError(this.handleError));
    }
  
    insertarPesona(persona: Persona) {
      const token = localStorage.getItem('token')
      const headers = { 'Authorization':  `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.post<Persona>(this.endpointPersona+"/insertar", persona,{ headers }).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }
  
    updatePersona(persona: Persona, id:string){
      const token = localStorage.getItem('token')
      const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.put<Persona>(this.endpointPersona+"/"+id, persona,{ headers }).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }
  
    deletePersona(id:string){
      const token = localStorage.getItem('token')
      const headers = {   'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }

      this.http.delete(this.endpointPersona+"/"+id,{ headers }).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
  
              console.error(' error!', error);
          }
      })
    }

    updateBasicInfo(id:string, persona:PersonaBasic){
      const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}` }
      const body=persona;
      this.http.post<PersonaBasic>(this.endpointPersona+"/"+id,body,{'headers':headers}).subscribe({
        next: data => {
              console.log("datos",data)
          },
          error: error => {
              console.error(' error!', error);
          }
      })
    }

    getPersonaId(email:string) {
      const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}`, "Content-Type": "application/x-www-form-urlencoded" }
      return this.http.get<Persona>(this.endpointPersona+"/traerId?email="+email,{ headers }).pipe(retry(3),catchError(this.handleError));
    }

  }
