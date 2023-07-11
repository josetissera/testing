import { Contacto } from "./contactos";

function eliminarContacto(id :number, contactos:Contacto[]){

    const filtroPorId = (contacto:Contacto)=>{
        return contacto.id != id
    }

    return contactos.filter(filtroPorId)
}



export {eliminarContacto};