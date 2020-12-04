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
  //constructor(private productoService: ProductoService) { }
  //message : string;

  ngOnInit(): void {
    //this.productoService.sharedMessage.subscribe(message => this.message = message)
  } 

  /*newMessage() {
    this.productoService.nextMessage("Segundo mensaje")
  }*/

  onRegisterProduct() {
    // TODO: Use EventEmitter with form value
    this.productoService.insertarProductos({
      _id: this.RegisterProductForm.get('shippingCost').value,
      nombre: this.RegisterProductForm.get('name').value,
      precio: this.RegisterProductForm.get('price').value,
      presentacion: this.RegisterProductForm.get('display').value,
      costo_envio: this.RegisterProductForm.get('shippingCost').value,
      dias_envio: this.RegisterProductForm.get('shippingDays').value,
      unidades_disp: this.RegisterProductForm.get('availableUnits').value,
      ubicacion: this.RegisterProductForm.get('location').value,
      fecha_exp: this.RegisterProductForm.get('expireDate').value,
      descrip: this.RegisterProductForm.get('description').value,
      img_prod: this.RegisterProductForm.get('productImage').value
    });
    this.RegisterProductForm.reset();
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
