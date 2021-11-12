export interface User {
    id: number,
    nom: string, 
    prenom: string,
    email: string,
    tel: string,
    adresse: Adresse
}

interface Adresse{
    ville: string, 
    adresse: string,
    cp: string,
    pays: string
}

