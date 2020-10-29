export interface ConfirmarCompraInterface {
    name: string,
    unitPrice: number,
    shippingPrice: number,
    presentation: string,
    expireDate: Date,
    units: number,
    deliveryAddress: string,
    vendorName: string
}

export class ConfirmarCompraModel implements ConfirmarCompraInterface {
    constructor(
        public name: string,
        public unitPrice: number,
        public shippingPrice: number,
        public presentation: string,
        public expireDate: Date,
        public units: number,
        public deliveryAddress: string,
        public vendorName: string
    ) { }
}

export const CONFIRMARCOMPRA: ConfirmarCompraModel = {
    name: "Frijoles pintos",
    unitPrice: 23.50,
    shippingPrice: 40,
    presentation: "bolsa 1 Kg",
    expireDate: new Date("2020-11-23"),
    units: 5,
    deliveryAddress: "Calle 11",
    vendorName: "José Luis Espínosa La Jefa"
}

export const CONFIRMARCOMPRA2: ConfirmarCompraModel = {
    name: "Frijoles bayos",
    unitPrice: 23.50,
    shippingPrice: 40,
    presentation: "bolsa 2 Kg",
    expireDate: new Date("2020-11-23"),
    units: 5,
    deliveryAddress: "Calle 11",
    vendorName: "José Luis Espínosa La Jefa"
}