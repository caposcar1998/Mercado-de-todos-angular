export interface RegisterProducts{
    name: string,
    price: number,
    display: string,
    location: string,
    availableUnits: number,
    shippingCost: number,
    expireDate : Date,
    shippingDays: number,
    description: string,
    productImage: File
}

export const REGISTERPRODUCTS = [
    {name:"Tomate",price:20,display:"1 Kilo",location:"San Luis",availableUnits:15,shippingCost:150,expireDate:"23/10/20", shippingDays:1,description:"Ricos tomates bien rojos y redonditos", productImage:""}
]