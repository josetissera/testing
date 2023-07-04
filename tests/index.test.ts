import {contactos} from "../src/contactos";
import {eliminarContacto} from "../src/eliminarContacto";
import {modificarEmail} from "../src/modificarEmail";

describe("eliminar contactos",() => {
    test("si elimino un contacto la lista se reduce",() =>{
        const contacto = contactos[9]
        const respuesta = eliminarContacto(contacto.id)
        expect(contactos).toHaveLength(9)

    });
    
    test("si elimino un contacto que no existe, nada cambia",() =>{
        const respuesta = eliminarContacto(21)
        expect(contactos).toHaveLength(10)
    });
})


describe("modificar emails",() => {
    test("si modifico un mail, este debe ser actualizado",() =>{
        const contacto = contactos[9]
        const respuesta = modificarEmail(contacto.id, "mailnuevo@gmail.com")
        expect(contacto.email).toBe("mailnuevo@gmail.com")

    });
    
    test("no puedo modificar un email de un contacto que no existe",() =>{
        expect(eliminarContacto(21, "mailnuevo@gmail.com")).toThrowError("No existe ese contacto")
    });
})

