import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  message:string;

  constructor(private carritoService: CarritoService) {
   }

  ngOnInit(): void {
    console.log(this.carritoService.accesoFacturacion);
    this.carritoService.sharedMessage.subscribe(message => this.message = message)
    console.log(this.message)
  }

}
