import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { ConfirmarCompra } from 'src/app/models/confirmarCompra';
import { ConfirmarCompraModel, CONFIRMARCOMPRA, CONFIRMARCOMPRA2 } from 'src/app/models/confirmarCompra.model';

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.scss']
})
export class ConfirmarCompraComponent implements OnInit {
  @Input() confirmarCompraCard: ConfirmarCompra;
  constructor(private productoService: ProductoService) { }

  purchaseConfirmation: ConfirmarCompraModel;

  ngOnInit(): void {
    this.productoService.sharedMessagePurchaseConfirmation.subscribe(newPurchase => this.purchaseConfirmation = newPurchase);
  }

  updatePurchaseConfirmation() {
    this.productoService.newPurchaseConfirmation(CONFIRMARCOMPRA2);
  }

  onConfirmarCompra(){
    console.warn(this.confirmarCompraForm.value);
    console.log('hola');
  }
  
  confirmarCompraForm = new FormGroup({
    cardNumber: new FormControl(''),
    name: new FormControl(''),
    expirationDate: new FormControl(''),
    cvv: new FormControl(''),
  });

}
