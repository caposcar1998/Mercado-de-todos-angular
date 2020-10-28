import { Component, OnInit } from '@angular/core';
import { MostrarProductoService } from '../../services/mostrar-producto.service';
import { ProductosAnunciadosModel, PRODUCTOSANUNCIADOS2 } from 'src/app/models/productosAnunciados.model'

@Component({
  selector: 'app-productos-anunciados',
  templateUrl: './productos-anunciados.component.html',
  styleUrls: ['./productos-anunciados.component.scss']
})
export class ProductosAnunciadosComponent implements OnInit {

  announceProducts: ProductosAnunciadosModel[];

  constructor(private mostrarProductoService: MostrarProductoService) { }

  ngOnInit(): void {
    this.mostrarProductoService.sharedMessageAnnounceProducts.subscribe(newProducts => this.announceProducts = newProducts);
  }

  updateAnnounceProducts(){
    this.mostrarProductoService.newAnnounceProducts(PRODUCTOSANUNCIADOS2);
  }

}
