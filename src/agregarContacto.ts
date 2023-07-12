import { Contacto } from "./contactos";

function agregarContacto(lista:Contacto[], contactoNuevo:Contacto){
    let estaRepetido: boolean = false    
    let nuevaLista:Contacto[] = []
    nuevaLista = nuevaLista.concat(lista)
    lista.forEach(elem => {
        if (elem.id === contactoNuevo.id){
            estaRepetido = true
       }
    });
    if (estaRepetido === false){
        nuevaLista.push(contactoNuevo)
    }
    return nuevaLista
}

export {agregarContacto};
