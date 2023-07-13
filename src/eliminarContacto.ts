import { Contacto } from "./contactos";


/*
function eliminarContacto(id :number, contactos:Contacto[]){

    const filtroPorId = (contacto:Contacto)=>{
        return contacto.id != id
    }

    return contactos.filter(filtroPorId)
}
*/

function eliminarContacto(id:number, contactos:Contacto[]){
    let listaNueva:Contacto[] = []
    contactos.forEach(elem => {
        if(elem.id !== id){
            listaNueva.push(elem)
        }
    });
    return listaNueva
}


export {eliminarContacto};