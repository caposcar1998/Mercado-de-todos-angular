
export interface ProductoModel {
    _id : {type: String},
    nombre : {type: String},
    precio : {type: Number},
    presentacion : {type: String},
    costo_envio : {type : Number},
    dias_envio : {type : Number},
    unidades_disp : {type : Number},
    ubicacion : {type: String},
    fecha_exp: {type: Date},
    descrip : {type: String},
    img_prod : {type: String},
}
