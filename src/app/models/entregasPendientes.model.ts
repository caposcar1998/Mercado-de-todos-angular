export interface EntregasPendientesInterface {
    productImage: File,
    buyerName: string,
    name: string,
    price: number,
    availableUnits: number,
    presentation: string,
    expireDate: Date,
    deliveryTime: number,
    unitsSold: number
}

export class EntregasPendientesModel implements EntregasPendientesInterface {
    constructor(
        public productImage: File,
        public buyerName: string,
        public name: string,
        public price: number,
        public availableUnits: number,
        public presentation: string,
        public expireDate: Date,
        public deliveryTime: number,
        public unitsSold: number
    ) { }
}

export const ENTREGASPENDIENTES: EntregasPendientesModel[] = [
    {
        productImage: null,
        buyerName: "Karen",
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
        buyerName: "Juan",
        name: "Aguacates",
        price: 20500,
        availableUnits: 300,
        presentation: "pieza",
        expireDate: new Date("2021-02-02"),
        deliveryTime: 10,
        unitsSold: 150
    }
]

export const ENTREGASPENDIENTES2: EntregasPendientesModel[] = [
    {
        productImage: null,
        buyerName: "Karen II",
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
        buyerName: "Juan II",
        name: "Aguacates II",
        price: 20500,
        availableUnits: 300,
        presentation: "pieza",
        expireDate: new Date("2021-02-02"),
        deliveryTime: 10,
        unitsSold: 150
    }
]