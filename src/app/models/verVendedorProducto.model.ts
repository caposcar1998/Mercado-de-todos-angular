export interface VerVendedorProductoInterface {
    productImage: File,
    name: string,
    price: number,
    availableUnits: number,
    presentation: string,
    expireDate: Date,
    deliveryDate: Date
}

export class VerVendedorProductoModel implements VerVendedorProductoInterface {
    constructor(
        public productImage: File,
        public name: string,
        public price: number,
        public availableUnits: number,
        public presentation: string,
        public expireDate: Date,
        public deliveryDate: Date
    ) { }
}

export const VERVENDEDORPRODUCTO: VerVendedorProductoModel[] = [
    {
        productImage: null,
        name: "Frijoles pintos",
        price: 243.50,
        availableUnits: 3,
        presentation: "bolsa 1 Kg",
        expireDate: new Date("2020-11-27"),
        deliveryDate: new Date("2020-11-13")
    },
    {
        productImage: null,
        name: "Aguacates",
        price: 20500,
        availableUnits: 300,
        presentation: "pieza",
        expireDate: new Date("2021-02-02"),
        deliveryDate: new Date("2020-11-18")
    }
]

export const VERVENDEDORPRODUCTO2: VerVendedorProductoModel[] = [
    {
        productImage: null,
        name: "Frijoles pintos",
        price: 243.50,
        availableUnits: 3,
        presentation: "bolsa 1 Kg",
        expireDate: new Date("2020-11-27"),
        deliveryDate: new Date("2020-11-13")
    },
    {
        productImage: null,
        name: "Aguacates",
        price: 20500,
        availableUnits: 300,
        presentation: "pieza",
        expireDate: new Date("2021-02-02"),
        deliveryDate: new Date("2020-11-18")
    }
]