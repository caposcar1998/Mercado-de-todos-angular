import { Component, OnInit } from '@angular/core';
import { MostrarProductoService } from '../../services/mostrar-producto.service';


@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.scss']
})
export class MostrarProductoComponent implements OnInit {

  message: string;

  constructor(private mostrarProductoService: MostrarProductoService) { }

  ngOnInit(): void {
    console.log(this.mostrarProductoService.accesoFacturacion);
    this.mostrarProductoService.sharedMessage.subscribe(message => this.message = message);
    console.log(this.message);
  }

}
