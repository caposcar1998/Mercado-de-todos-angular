import { isConstructorDeclaration } from 'typescript'

export interface ProductosAnunciadosInterface {
    productImage: File,
    name: string,
    price: number,
    availableUnits: number,
    presentation: string,
    expireDate: Date,
    deliveryTime: number,
    unitsSold: number
}

export class ProductosAnunciadosModel implements ProductosAnunciadosInterface {
    constructor(
        public productImage: File,
        public name: string,
        public price: number,
        public availableUnits: number,
        public presentation: string,
        public expireDate: Date,
        public deliveryTime: number,
        public unitsSold: number
    ) { }
}

export const PRODUCTOSANUNCIADOS: ProductosAnunciadosModel[] = [
    {
        productImage: null,
        name: "Frijoles bayos",
        price: 243.50,
        availableUnits: 3,
        presentation: "bolsa 1 Kg",
        expireDate: new Date("2020-11-23"),
        deliveryTime: 5,
        unitsSold: 16
    },
    {
        productImage: null,
        name: "Aguacates",
        price: 20500,
        availableUnits: 300,
        presentation: "pieza",
        expireDate: new Date("2021-02-02"),
        deliveryTime: 10,
        unitsSold: 150
    }
]

export const PRODUCTOSANUNCIADOS2: ProductosAnunciadosModel[] = [
    {
        productImage: null,
        name: "Frijoles bayos II",
        price: 243.50,
        availableUnits: 3,
        presentation: "bolsa 1 Kg",
        expireDate: new Date("2020-11-23"),
        deliveryTime: 5,
        unitsSold: 16
    },
    {
        productImage: null,
        name: "Aguacates II",
        price: 20500,
        availableUnits: 300,
        presentation: "pieza",
        expireDate: new Date("2021-02-02"),
        deliveryTime: 10,
        unitsSold: 150
    }
]