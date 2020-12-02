export interface ProfileInterface {
    profileImage: File,
    name: string,
    address: string,
    state: string,
    mail: string,
    phone: string
}



export class ProfileModel implements ProfileInterface {
    constructor(
        public profileImage: File,
        public name: string,
        public address: string,
        public state: string,
        public mail: string,
        public phone: string
    ) { }
}

export const PROFILE: ProfileModel = {
    profileImage: null,
    name: "Karen Ramírez",
    address: "Avenida de la playa #222, San Juan de la Playa, C.P. 02364",
    state: "Monterrey",
    mail: "karenciita@gmail.com",
    phone: "040 55 25 35 21 57"
}

export const PROFILE2: ProfileModel = {
    profileImage: null,
    name: "José Luis Espinosa La Jefa",
    address: "Kansas #18, Nápoles, C.P. 02364",
    state: "Ciudad de México",
    mail: "lajefaqpd@gmail.com",
    phone: "040 55 25 35 21 57"
}

export const PROFILE3: ProfileModel = {
    profileImage: null,
    name: "Pepe Lechuga",
    address: "Avenida de la playa #222, San Juan de la Playa, C.P. 02364",
    state: "Sonora",
    mail: "contacto@lechuga.io",
    phone: "040 55 25 35 21 57"
}