import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductoModel } from 'src/app/models/producto.model';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit, OnDestroy {

  id: String;
  productDetail: ProductoModel;

  subscription: Subscription;


  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductoService) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      console.log("Dentro de detalle-producto ngOnInit()");
      console.log(params);
      this.id = params.get('id');
      this.productService.getProductosId(this.id).subscribe(info => this.productDetail = info);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
