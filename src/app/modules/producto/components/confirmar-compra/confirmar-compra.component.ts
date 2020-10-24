import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfirmarCompra } from "../../../../models/confirmarCompra";

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.scss']
})
export class ConfirmarCompraComponent implements OnInit {
  @Input() confirmarCompraCard: ConfirmarCompra;
  constructor() { }

  ngOnInit(): void {
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
