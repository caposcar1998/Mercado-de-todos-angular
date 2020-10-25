import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterProducts } from "../../../../models/registerProducts";
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.scss']
})
export class RegistrarProductoComponent implements OnInit {

  @Input() registerProducts : RegisterProducts;

  constructor(private productoService: ProductoService) { }
  message : string;

  ngOnInit(): void {
    this.productoService.sharedMessage.subscribe(message => this.message = message)
  } 

  newMessage() {
    this.productoService.nextMessage("Segundo mensaje")
  }

  onRegisterProduct() {
    // TODO: Use EventEmitter with form value
    console.warn(this.RegisterProductForm.value);
    console.log("hello")
  }

  RegisterProductForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    display: new FormControl(''),
    location: new FormControl(''),
    availableUnits: new FormControl(''),
    shippingCost: new FormControl(''),
    expireDate: new FormControl(''),
    shippingDays: new FormControl(''),
    description: new FormControl(''),
    productImage: new FormControl(''),
  });
}
