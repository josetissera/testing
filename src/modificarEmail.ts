import { Contacto } from "./contactos";

/*function modificarEmail(id: number, mail: string, contactos: Contacto[]) {

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
*/

function modificarEmail(id:number,mail:string,contactos:Contacto[]){
    let listaNueva:Contacto[] = []
    let modifiqueUnMail:boolean = false
    contactos.forEach(elem => {
        if (elem.id === id){
            elem.email = mail
            modifiqueUnMail = true
        }
        listaNueva.push(elem)
    });
    if(modifiqueUnMail){
        return listaNueva
    }
    else throw  Error("No existe ese contacto")
    
}

export { modificarEmail };