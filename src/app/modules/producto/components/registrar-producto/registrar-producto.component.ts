import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterProducts } from "../../../../models/registerProducts";
import { ProductoService } from '../../services/producto.service';

import { FirebaseStorageService } from '../../../../firebase-storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Url } from 'url';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { RegistrarProductoModel } from '../../../../models/registrarProducto.model';
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
    name: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    display: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required),
    availableUnits: new FormControl(null, Validators.required),
    shippingCost: new FormControl(null, Validators.required),
    expireDate: new FormControl(null, Validators.required),
    shippingDays: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    productImage: new FormControl(null, Validators.required),
  });
  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
  public downloadURL = '';
  url;
  imageSource = '';

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

  selectFile(event) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			
			this.url = reader.result; 
		}
	}

  onRegisterProduct() {

    let archivo = this.datosFormulario.get('productImage');

    if(!archivo || !this.RegisterProductForm.get('name').value || !this.RegisterProductForm.get('shippingDays').value 
      || !this.RegisterProductForm.get('price').value || !this.RegisterProductForm.get('display').value 
      || !this.RegisterProductForm.get('shippingCost').value || !this.RegisterProductForm.get('availableUnits').value 
      || !this.RegisterProductForm.get('location').value || !this.RegisterProductForm.get('expireDate').value 
      || !this.RegisterProductForm.get('description').value){
      alert("Es necesario llenar todos los campos");
      return;
    }
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);
    let urlImage = "";

    
    (async () => { 
      // Do something before delay
      referencia.put(archivo).then(data => {
        data.ref.getDownloadURL().then(async url => {
          console.log(url)
          urlImage = url
          
        });
      }); 
      await this.delay(5000);
      // Do something after
      console.log(urlImage);
      console.log("oski puto", this.RegisterProductForm.get('name').value);
      this.productoService.registrarProducto({
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
      
  
    })();



    
  }


    

  }

