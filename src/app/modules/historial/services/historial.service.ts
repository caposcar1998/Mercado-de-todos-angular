import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  accesoFacturacion = 'https://login.example.com';

  private message = new BehaviorSubject('First Message in historial');
  sharedMessage = this.message.asObservable();

  nextMessage(message: string) {
    this.message.next(message)
  }

  constructor() { }
}
