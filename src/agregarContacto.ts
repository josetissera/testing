import { Contacto, contactos } from "./contactos";

function agregarContacto(lista:Contacto[], contactoNuevo:Contacto){
    contactos.forEach(elem => {
        if (elem === contactoNuevo){
            return contactos
        }
    });
    return lista.push(contactoNuevo)
}

export {agregarContacto};