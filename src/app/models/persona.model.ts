export interface Persona{
    nombre : {type: String},
    ciudad: {type: String},
    telefono : {type: Number},
    domicilio : {type: String},
    correo : {type: String},
    contraseña : {type: String},
    vendedor : {type: Boolean},
    comprador: {type: Boolean},
    idReferenciaCarrito : {type: String},
    idReferenciaCatalogo : {type: String},
    idReferenciaHistorial :{type: String}
}