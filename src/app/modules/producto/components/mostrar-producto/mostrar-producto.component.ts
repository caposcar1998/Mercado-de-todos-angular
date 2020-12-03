import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/producto.model';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.scss']
})
export class MostrarProductoComponent implements OnInit {

  showProducts: Observable<Producto[]>;

  constructor(private mostrarProductoService: ProductoService) { }

  ngOnInit(): void {
    this.showProducts = this.mostrarProductoService.getProductos();
  }

}
