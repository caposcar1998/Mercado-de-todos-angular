export interface MostrarProductoInterface {
    productImage: File,
    name: string,
    presentation: string,
    unitPrice: number,
    shippingPrice: number
}

export class MostrarProductoModel implements MostrarProductoInterface {
    constructor(
        public productImage: File,
        public name: string,
        public presentation: string,
        public unitPrice: number,
        public shippingPrice: number
    ) { }
}

export const MOSTRARPRODUCTO: MostrarProductoModel[] = [
    {
        productImage: null,
        name: "Frijol negro",
        presentation: "Bolsa de 1 Kg",
        unitPrice: 15.00,
        shippingPrice: 13.00
    },
    {
        productImage: null,
        name: "Frijol bayo",
        presentation: "Bolsa de 1 Kg",
        unitPrice: 15.00,
        shippingPrice: 13.00
    },
    {
        productImage: null,
        name: "Frijol pinto",
        presentation: "Bolsa de 1 Kg",
        unitPrice: 15.00,
        shippingPrice: 13.00
    }
]

export const MOSTRARPRODUCTO2: MostrarProductoModel[] = [
    {
        productImage: null,
        name: "Frijol negro II",
        presentation: "Bolsa de 1 Kg",
        unitPrice: 15.00,
        shippingPrice: 13.00
    },
    {
        productImage: null,
        name: "Frijol bayo II",
        presentation: "Bolsa de 1 Kg",
        unitPrice: 15.00,
        shippingPrice: 13.00
    },
    {
        productImage: null,
        name: "Frijol pinto II",
        presentation: "Bolsa de 1 Kg",
        unitPrice: 15.00,
        shippingPrice: 13.00
    }
]