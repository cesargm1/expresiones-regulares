const regex = /^[A-Z a-z 0-9]*?@[a-z]+\.[a-z]{2,3}$/
const text = "domino@gmail.es"

if(regex.test(text)) {
    console.log("correcto")
} else {
    console.log("incorrecto")
}


// Una contraseña será válida si tiene al menos 8 caracteres, contiene una
// mayúscula, una minúscula, un número y un carácter especial.
// 2. Implementa la función validarPassword(pass) y prueba diferentes casos.

const regex1 = /^[a-zA-Z0-9?=/&$·"!{}¿!<>\-_^]{8,}$/ 
const text1 = "a26h<aH"

if(regex1.test(text1)) {
    console.log("correcto")
} else {
    console.log("incorrecto")
}


// ejercicio 3

// 1. Crea un texto largo con frases que incluyan números (ejemplo: "Tengo 2 perros y 15 peces").
//  2. Con una expresión regular, extrae todos los números y guárdalos en un array.

const array = [];

const text3 = "Tengo 2 perros y 15 peces"

const result = text3.match(/[0-9]+/g)

result.push(array)
console.log(array)

// comienza por a /^a/ 

// $ acaba por a  a$

//*  e* 1 ninguna o muchas e

// + mucho o 1

// solo una vez ? 



// Ejercicio 4: Validación de matrículas de coche CE 5g: Se han utilizado expresiones regulares para facilitar los procedimientos de
// validación.
// 1. Valida matrículas españolas en formato antiguo (1234-ABC) y en formato nuevo
// (1234ABC).
// 2. Implementa la función validarMatricula(m) que devuelva true o false.


const validarMatricula = (n) => {
    const regex = /^[0-9]{4}-[A-Z]{3}$|^[0-9]{4}[A-Z]{3}$/
   return regex.test(n)
}

validarMatricula(n.match("1234ABC"))


// Ejercicio 5: Comprobación de fechas
// CE 5g: Se han utilizado expresiones regulares para facilitar los procedimientos de
// validación.
// CE 5f: Se han validado formularios web utilizando eventos.
// 1. Escribe una expresión regular que valide fechas en formato dd/mm/yyyy.

const validarFecha = (n) => {
  const regex = /[0-9]{2}\/[0-12]{2}\/[0-9]{4}$/
  return regex.test(n)
}

validarFecha(n.match("10/02/2016"))
// 2. Implementa un formulario con un campo fecha y valida la entrada en el evento blur