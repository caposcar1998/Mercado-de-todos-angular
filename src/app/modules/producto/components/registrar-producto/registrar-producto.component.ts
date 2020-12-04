import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterProducts } from "../../../../models/registerProducts";
import { ProductoService } from '../../services/producto.service';

import { FirebaseStorageService } from '../../../../firebase-storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Url } from 'url';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ProductoModel } from '../../../../models/producto.model';
import { ProductoModule } from '../../producto.module';


@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.scss']
})
export class RegistrarProductoComponent implements OnInit {

  @Input() registerProducts : RegisterProducts;


  constructor(private productoService: ProductoService, 
    private firebaseStorage: FirebaseStorageService) { }
    
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
    productImage: new FormControl(null, Validators.required),
  });
  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
  public downloadURL = '';

  cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('productImage');
        this.datosFormulario.append('productImage', event.target.files[i], event.target.files[i].name)
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  ngOnInit(): void {
    //this.productoService.sharedMessage.subscribe(message => this.message = message)
  } 



  onRegisterProduct() {
    let archivo = this.datosFormulario.get('productImage');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);
    let urlImage = "";

    // setTimeout(function sayHello() { console.log("Karen", urlImage)}, 5000);
    (async () => { 
      // Do something before delay
      referencia.put(archivo).then(data => {
        data.ref.getDownloadURL().then(async url => {
          console.log(url)
          urlImage = url
          
        });
      });
      console.log('before delay')

      await this.delay(5000);

      // Do something after
      console.log(urlImage);
      this.productoService.insertarProductos({
        _id: "",
        nombre: this.RegisterProductForm.get('name').value,
        precio: this.RegisterProductForm.get('price').value,
        presentacion: this.RegisterProductForm.get('display').value,
        costo_envio: this.RegisterProductForm.get('shippingCost').value,
        dias_envio: this.RegisterProductForm.get('shippingDays').value,
        unidades_disp: this.RegisterProductForm.get('availableUnits').value,
        ubicacion: this.RegisterProductForm.get('location').value,
        fecha_exp: this.RegisterProductForm.get('expireDate').value,
        descrip: this.RegisterProductForm.get('description').value,
        img_prod: urlImage
      });
      this.RegisterProductForm.reset();
      console.log('after delay')
    })();



    
  }


    

  }

