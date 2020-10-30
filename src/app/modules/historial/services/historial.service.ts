import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HistorialModel, HISTORIAL } from 'src/app/models/historial.model';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private history = new BehaviorSubject(HISTORIAL);
  sharedMessagehistory = this.history.asObservable();

  newHistory(newHistory: HistorialModel[]) {
    this.history.next(newHistory);
  }

  constructor() { }
}
