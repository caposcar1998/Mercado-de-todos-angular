import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProfileModel, PROFILE, PROFILE2 } from 'src/app/models/profile.model';
import { VerVendedorProductoModel, VERVENDEDORPRODUCTO } from 'src/app/models/verVendedorProducto.model';
import { VerCompradorProductoModel, VERCOMPRADORPRODUCTO } from 'src/app/models/verCompradorProducto.model';

import { HistorialModel, HISTORIAL } from 'src/app/models/historial.model';
// PROFILE1 es de comprador
// PROFILE2 es de vendedor

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

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

    constructor() { }
  }
