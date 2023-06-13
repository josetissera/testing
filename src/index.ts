import { Contacto, contactos } from "../src/contactos";

function checkNewContact(contactos: Contacto) {
    return contactos.first_name.length > 0 && contactos.last_name.length > 0;
}



function findByEmail(email: string) {

    if (email === "") {
        return contactos
    }

    const encontrados = []

    for (const contacto of contactos) {
        if (email === contacto.email) {
            encontrados.push(contacto)
        }
    }
    
    for (const contacto of contactos) {
        if(contacto.email.includes(".com")){
            

        }
    }
    return encontrados
}

export { checkNewContact }
export { findByEmail }