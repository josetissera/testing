import { Contacto, contactos } from "../src/contactos";

function checkNewContact(contactos: Contacto) {
    return contactos.first_name.length > 0 && contactos.last_name.length > 0;
}



function findByEmail(palabra: string) {

    if (palabra === "") {
        return contactos
    }

    const encontrados = []

    for (const contacto of contactos) {
        if (contacto.email.includes(palabra)) {
            encontrados.push(contacto)
        }
    }
    return encontrados
}

const updateIPAddress = (lista: Contacto[]) => {

    return lista.map((contacto) => {
        return {
            ...contacto,
            ip_address: contacto.ip_address + "." + contacto.id
        }
    })
}



function findOneByEmail(email:string){
    const contactoVacio :Contacto = {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        ip_address: "",
    }

    for (const contacto of contactos) {
        if (contacto.email == email) {
            return contacto;
        }
    }
    return contactoVacio
};


export { checkNewContact }
export { findByEmail }
export {findOneByEmail}
export { updateIPAddress }