export interface VerCompradorProductoInterface {
    productImage: File,
    name: string,
    price: number,
    date: Date,
    review: string
}

export class VerCompradorProductoModel implements VerCompradorProductoInterface {
    constructor(
        public productImage: File,
        public name: string,
        public price: number,
        public date: Date,
        public review: string
    ) { }
}

export const VERCOMPRADORPRODUCTO: VerCompradorProductoModel[] = [
    {
        productImage: null,
        name: "Frijoles pintos",
        price: 2400,
        date: new Date("2020-09-10"),
        review: "Opino que Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        productImage: null,
        name: "Aguacate",
        price: 25000,
        date: new Date("2020-09-13"),
        review: "Opino que Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]

export const VERCOMPRADORPRODUCTO2: VerCompradorProductoModel[] = [
    {
        productImage: null,
        name: "Frijoles pintos II",
        price: 2400,
        date: new Date("2020-09-10"),
        review: "Opino que Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        productImage: null,
        name: "Aguacate II",
        price: 25000,
        date: new Date("2020-09-13"),
        review: "Opino que Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]