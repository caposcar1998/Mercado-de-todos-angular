import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  accesoFacturacion = 'https/login.example.com';
  
  private message = new BehaviorSubject('First Message');
  sharedMessage = this.message.asObservable();

  nextMessage(message: string){
    this.message.next(message)
  }

  constructor() { }
}
