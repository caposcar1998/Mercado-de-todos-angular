import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() amount: Number = 0;
  total: Number = 0;

  subscription: Subscription;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductoService) { }

  ngOnInit(): void {
      this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.productService.getProductosId(this.id).subscribe(info => this.productDetail = info);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateTotal() {
    this.total = this.amount.valueOf() * this.productDetail.precio.valueOf() + this.productDetail.costo_envio.valueOf();
  }

  purchase() {
    this.router.navigate(['/producto/confirmarCompra/'+this.id], { queryParams: { amount: this.amount}, queryParamsHandling: "merge" });
  }
}
