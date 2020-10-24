import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../services/historial.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.scss']
})
export class HistorialComprasComponent implements OnInit {

  message:string;

  constructor(private historialService: HistorialService) {
   }

  ngOnInit(): void {
    console.log(this.historialService.accesoFacturacion);
    this.historialService.sharedMessage.subscribe(message => this.message = message)
    console.log(this.message)
  }

}
