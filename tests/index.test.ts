import { contactos, Contacto } from "../src/contactos";
import { eliminarContacto } from "../src/eliminarContacto";
import { modificarEmail } from "../src/modificarEmail";
import { agregarContacto } from "../src/agregarContacto";

describe("eliminar contactos", () => {

  test("si elimino un contacto la lista se reduce", () => {
    const contacto = contactos[9]
    const respuesta: Contacto[] = eliminarContacto(contacto.id, contactos)
    expect(respuesta).toHaveLength(9)

  });

  test("si elimino un contacto que no existe, nada cambia", () => {
    const respuesta = eliminarContacto(21, contactos)
    expect(contactos).toHaveLength(10)
  });
})


describe("modificar emails", () => {
  test("si modifico un mail, este debe ser actualizado", () => {
    const contacto = contactos[9]
    const respuesta: Contacto[] = modificarEmail(contacto.id, "mailnuevo@gmail.com", contactos)
    expect(respuesta[9].email).toBe("mailnuevo@gmail.com")

  });

  test("no puedo modificar un email de un contacto que no existe", () => {
    expect(() => modificarEmail(21, "mailnuevo@gmail.com", contactos)).toThrow("No existe ese contacto")
  });
})

describe("agregar contactos", () => {
  test("al crear un nuevo contacto,la longitud de la lista aumenta", () => {
    const contactoNuevo: Contacto = {
      id: 11,
      first_name: "Jose",
      last_name: "Bobadilla",
      email: "tojoa12@gmail.com",
      gender: "nonbinary",
      ip_address: "192.83.129.103"
    }
    const respuesta: Contacto[] = agregarContacto(contactos, contactoNuevo)
    expect(respuesta).toHaveLength(11)
    expect(contactos).toHaveLength(10)
  });

  test("no pueden existir dos contactos con el mismo id", () => {
    const contactoRepetido: Contacto = {
      id: 10,
      first_name: "Sashenka",
      last_name: "Arnley",
      email: "sarnley9@ed.gov",
      gender: "Female",
      ip_address: "195.89.119.106",
    }
    const respuesta: Contacto[] = agregarContacto(contactos, contactoRepetido)
    expect(respuesta).toHaveLength(10)
  });
})

