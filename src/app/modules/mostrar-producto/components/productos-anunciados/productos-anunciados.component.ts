import { Component, OnInit } from '@angular/core';
import { MostrarProductoService } from '../../services/mostrar-producto.service';
@Component({
  selector: 'app-productos-anunciados',
  templateUrl: './productos-anunciados.component.html',
  styleUrls: ['./productos-anunciados.component.scss']
})
export class ProductosAnunciadosComponent implements OnInit {

  message: string;

  constructor(private mostrarProductoService: MostrarProductoService) { }

  ngOnInit(): void {
    this.mostrarProductoService.sharedMessage.subscribe(message => this.message = message);
  }

  newMessage(){
    this.mostrarProductoService.nextMessage("Second Message");
  }

}
