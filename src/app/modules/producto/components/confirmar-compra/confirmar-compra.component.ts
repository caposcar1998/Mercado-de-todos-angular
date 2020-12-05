import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { ConfirmarCompra } from 'src/app/models/confirmarCompra';
import { ProductoModel } from 'src/app/models/producto.model';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.scss']
})
export class ConfirmarCompraComponent implements OnInit, OnDestroy {
  @Input() confirmarCompraCard: ConfirmarCompra;

  id: String;
  productDetail: ProductoModel;
  amount : Number;

  subscription: Subscription;

  constructor(private productoService: ProductoService,
              private router: Router,
              private activatedRoute: ActivatedRoute
    ) { }

  purchaseConfirmation: ConfirmarCompra;

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params =>  {
      this.amount = +params.get('amount').valueOf() || 1;
    });

    this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.productoService.getProductosId(this.id).subscribe(info => this.productDetail = info);
    });
  }

  onConfirmarCompra(){
    let purchase: ProductoModel = this.productDetail;
    purchase.unidades_disp = this.amount;
    this.productoService.putProductoComprar(purchase);
    this.router.navigate(['/mostrar-producto']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  confirmarCompraForm = new FormGroup({
    cardNumber: new FormControl(''),
    name: new FormControl(''),
    expirationDate: new FormControl(''),
    cvv: new FormControl(''),
  });

}
