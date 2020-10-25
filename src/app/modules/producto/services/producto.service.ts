import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  accesoFacturacion = 'https://producto.example.com';

  private message = new BehaviorSubject('Primer mensaje');
  sharedMessage = this.message.asObservable();

  nextMessage(message: string) {
    this.message.next(message)
  }

  constructor() { }
}
