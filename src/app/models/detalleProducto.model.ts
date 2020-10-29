export interface DetalleProductoInterface {
    productImage: File,
    description: string,
    name: string,
    unitPrice: number,
    shippingPrice: number,
    presentation: string,
    availableUnits: number,
    state: string,
    expireDate: Date,
}

export class DetalleProductoModel implements DetalleProductoInterface {
    constructor(
        public productImage: File,
        public description: string,
        public name: string,
        public unitPrice: number,
        public shippingPrice: number,
        public presentation: string,
        public availableUnits: number,
        public state: string,
        public expireDate: Date,
    ) { }
}

export const DETALLEPRODUCTO: DetalleProductoModel = {
    productImage: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac bibendum dui, ut placerat nunc.",
    name: "Frijoles pintos",
    unitPrice: 23.50,
    shippingPrice: 40,
    presentation: "bolsa 1 Kg",
    availableUnits: 30,
    state: "Chihuahua",
    expireDate: new Date("2020-11-23")
}


export const DETALLEPRODUCTO2: DetalleProductoModel = {
    productImage: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac bibendum dui, ut placerat nunc.",
    name: "Frijoles pintos II",
    unitPrice: 23.50,
    shippingPrice: 40,
    presentation: "bolsa 2 Kg",
    availableUnits: 30,
    state: "Chihuahua",
    expireDate: new Date("2020-11-23")
}