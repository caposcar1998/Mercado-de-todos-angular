export interface HistorialInterface {
    productImage: File,
    name: string,
    orderDate: Date,
    price: number,
    deliveryDate: Date,
    units: number,
    presentation: string,
    vendorName: string
}

export class HistorialModel implements HistorialInterface {
    constructor(
        public productImage: File,
        public name: string,
        public orderDate: Date,
        public price: number,
        public deliveryDate: Date,
        public units: number,
        public presentation: string,
        public vendorName: string
    ) { }
}

export const HISTORIAL: HistorialModel[] = [
    {
        productImage: null,
        name: "Frijoles pintos",
        orderDate: new Date("2020-09-07"),
        price: 4050,
        deliveryDate: new Date("2020-09-13"),
        units: 48,
        presentation: "Kg",
        vendorName: "José Luis Espinosa La Jefa"
    },
    {
        productImage: null,
        name: "Frijoles bayos",
        orderDate: new Date("2020-10-17"),
        price: 4050,
        deliveryDate: new Date("2020-10-23"),
        units: 48,
        presentation: "Kg",
        vendorName: "José Luis Espinosa La Jefa"
    }
]

export const HISTORIAL2: HistorialModel[] = [
    {
        productImage: null,
        name: "Frijoles pintos II",
        orderDate: new Date("2020-09-07"),
        price: 4050,
        deliveryDate: new Date("2020-09-13"),
        units: 48,
        presentation: "Kg",
        vendorName: "José Luis Espinosa La Jefa"
    },
    {
        productImage: null,
        name: "Frijoles bayos II",
        orderDate: new Date("2020-10-17"),
        price: 4050,
        deliveryDate: new Date("2020-10-23"),
        units: 48,
        presentation: "Kg",
        vendorName: "José Luis Espinosa La Jefa"
    }
]