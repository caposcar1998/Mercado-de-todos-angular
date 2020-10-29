import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarritoModel, CARRITO } from 'src/app/models/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private cart = new BehaviorSubject(CARRITO);
  sharedMessageCart = this.cart.asObservable();

  newCart(newCart: CarritoModel[]) {
    this.cart.next(newCart);
  }

  constructor() { }
}
