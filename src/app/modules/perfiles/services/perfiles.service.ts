import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  accesoFacturacion = 'https://perfiles.example.com';

  private message = new BehaviorSubject('Primer mensaje');
  sharedMessage = this.message.asObservable();

  nextMessage(message: string) {
    this.message.next(message)
  }

  constructor() { }
}
