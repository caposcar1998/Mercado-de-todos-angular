export interface CarritoInterface {
    productImage: File,
    name: string,
    units: number,
    presentation: string,
    price: number
}

export class CarritoModel implements CarritoInterface {
    constructor(
        public productImage: File,
        public name: string,
        public units: number,
        public presentation: string,
        public price: number
    ) { }
}

export const CARRITO: CarritoModel[] = [
    {
        productImage: null,
        name: "Frijoles",
        units: 30,
        presentation: "bolsa de 1Kg",
        price: 200
    },
    {
        productImage: null,
        name: "Aguacate",
        presentation: "pieza",
        units: 10,
        price: 12500
    }
]

export const CARRITO2: CarritoModel[] = [
    {
        productImage: null,
        name: "Frijoles II",
        presentation: "bolsa de 1Kg",
        units: 30,
        price: 200
    },
    {
        productImage: null,
        name: "Aguacate II",
        presentation: "pieza",
        units: 10,
        price: 12500
    }
]