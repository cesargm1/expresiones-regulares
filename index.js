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



// comienza por a /^a/ 

// $ acaba por a  a$

//*  e* 1 ninguna o muchas e

// + mucho o 1

// solo una vez ? 

//jdjjfj@gddhd.com