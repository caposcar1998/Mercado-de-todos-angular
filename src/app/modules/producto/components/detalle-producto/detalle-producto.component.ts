import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  constructor(private productoService: ProductoService) { }
  message : string;

  ngOnInit(): void {
    console.log(this.productoService.accesoFacturacion);
    this.productoService.sharedMessage.subscribe(message => this.message = message)
    console.log(this.message)
  }

}
