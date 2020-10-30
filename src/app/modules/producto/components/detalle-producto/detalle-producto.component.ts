import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { DetalleProductoModel, DETALLEPRODUCTO2 } from 'src/app/models/detalleProducto.model'

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  productDetail: DetalleProductoModel;

  constructor(private productService: ProductoService) { }

  ngOnInit(): void {
    this.productService.sharedMessageProductDetail.subscribe(newProduct => this.productDetail = newProduct);
  }

  updateProductDetail() {
    this.productService.newProductDetail(DETALLEPRODUCTO2);
  }

}
