import { Contacto } from "./contactos";

function modificarEmail(id: number, mail: string, contactos: Contacto[]) {

    function buscar(contacto:Contacto){
         return contacto.id === id
    }
    const existe = contactos.some(buscar);

    if  (!existe){
        throw  Error("No existe ese contacto")
    }
    function modificarSiEsElBuscado(contacto: Contacto) {
        return {
            ...contacto,
            email: contacto.id === id ? mail : contacto.email
        }
    }
    return contactos.map(modificarSiEsElBuscado)
}


export { modificarEmail };