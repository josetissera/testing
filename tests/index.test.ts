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
        const contactos: Contacto[] = [
            {
              id: 1,
              first_name: "Muhammad",
              last_name: "Alderwick",
              email: "malderwick0@google.es",
              gender: "Male",
              ip_address: "129.91.139.60",
            },
            {
              id: 2,
              first_name: "Clevey",
              last_name: "Cacacie",
              email: "ccacacie1@skype.com",
              gender: "Male",
              ip_address: "175.243.8.188",
            },
            {
              id: 3,
              first_name: "Hendrika",
              last_name: "Silbert",
              email: "hsilbert2@devhub.com",
              gender: "Female",
              ip_address: "20.60.238.2",
            },
            {
              id: 4,
              first_name: "Chad",
              last_name: "Fonzo",
              email: "cfonzo3@guardian.co.uk",
              gender: "Genderfluid",
              ip_address: "171.84.38.232",
            },
            {
              id: 5,
              first_name: "Kirsti",
              last_name: "Moss",
              email: "kmoss4@geocities.com",
              gender: "Bigender",
              ip_address: "116.218.180.93",
            },
            {
              id: 6,
              first_name: "Marwin",
              last_name: "Cutcliffe",
              email: "mcutcliffe5@sourceforge.net",
              gender: "Male",
              ip_address: "217.163.148.34",
            },
            {
              id: 7,
              first_name: "Hart",
              last_name: "Quibell",
              email: "hquibell6@ezinearticles.com",
              gender: "Male",
              ip_address: "197.215.16.120",
            },
            {
              id: 8,
              first_name: "Giff",
              last_name: "Catt",
              email: "gcatt7@deviantart.com",
              gender: "Male",
              ip_address: "199.179.57.74",
            },
            {
              id: 9,
              first_name: "Cam",
              last_name: "Foss",
              email: "cfoss8@joomla.org",
              gender: "Male",
              ip_address: "26.8.86.216",
            },
            {
              id: 10,
              first_name: "Sashenka",
              last_name: "Arnley",
              email: "sarnley9@ed.gov",
              gender: "Female",
              ip_address: "195.89.119.106",
            },
          ];
        const contactoNuevo: Contacto = {
            id: 11,
            first_name: "Jose",
            last_name: "Bobadilla",
            email: "tojoa12@gmail.com",
            gender: "nonbinary",
            ip_address: "192.83.129.103"
        }
        agregarContacto(contactos, contactoNuevo)
        expect(contactos).toHaveLength(11)
    });

    test("si un contacto tiene la misma información que otro contacto, no se crea", () => {
        const contactos: Contacto[] = [
            {
              id: 1,
              first_name: "Muhammad",
              last_name: "Alderwick",
              email: "malderwick0@google.es",
              gender: "Male",
              ip_address: "129.91.139.60",
            },
            {
              id: 2,
              first_name: "Clevey",
              last_name: "Cacacie",
              email: "ccacacie1@skype.com",
              gender: "Male",
              ip_address: "175.243.8.188",
            },
            {
              id: 3,
              first_name: "Hendrika",
              last_name: "Silbert",
              email: "hsilbert2@devhub.com",
              gender: "Female",
              ip_address: "20.60.238.2",
            },
            {
              id: 4,
              first_name: "Chad",
              last_name: "Fonzo",
              email: "cfonzo3@guardian.co.uk",
              gender: "Genderfluid",
              ip_address: "171.84.38.232",
            },
            {
              id: 5,
              first_name: "Kirsti",
              last_name: "Moss",
              email: "kmoss4@geocities.com",
              gender: "Bigender",
              ip_address: "116.218.180.93",
            },
            {
              id: 6,
              first_name: "Marwin",
              last_name: "Cutcliffe",
              email: "mcutcliffe5@sourceforge.net",
              gender: "Male",
              ip_address: "217.163.148.34",
            },
            {
              id: 7,
              first_name: "Hart",
              last_name: "Quibell",
              email: "hquibell6@ezinearticles.com",
              gender: "Male",
              ip_address: "197.215.16.120",
            },
            {
              id: 8,
              first_name: "Giff",
              last_name: "Catt",
              email: "gcatt7@deviantart.com",
              gender: "Male",
              ip_address: "199.179.57.74",
            },
            {
              id: 9,
              first_name: "Cam",
              last_name: "Foss",
              email: "cfoss8@joomla.org",
              gender: "Male",
              ip_address: "26.8.86.216",
            },
            {
              id: 10,
              first_name: "Sashenka",
              last_name: "Arnley",
              email: "sarnley9@ed.gov",
              gender: "Female",
              ip_address: "195.89.119.106",
            },
          ];
        const contactoRepetido: Contacto = {
            id: 10,
            first_name: "Sashenka",
            last_name: "Arnley",
            email: "sarnley9@ed.gov",
            gender: "Female",
            ip_address: "195.89.119.106",
       }
        agregarContacto(contactos, contactoRepetido)
        expect(contactos).toHaveLength(10)
    });
})

