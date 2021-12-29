//Los tipos de datos

//Strings
const stringData = "Hola mundo";
//Números
const numberData = 12;
//Booleanos
const booleanData = true //false
//Arrays (listas)
const arrayData = ["Juan", "Xavi", "Felipe"]
//Objetos (diccionarios)
const objectCasa = {
    ventanas: true,
    nombre: "La casa linda",
    direccion: "Londres, Valdivia",
    cantidadHab: 2,
    habitantes: ['Caro', 'Tequeño'],

}

// console.log("🚀 ~ file: introJavascript.js ~ line 5 ~ stringData", objectCasa["cantidadHab"])

function suma(nro1, nro2) {
  return nro1 + nro2;
}

function getFirstElement(array) {
    const firstElement = array[0];
    // console.log('firstElement en la función', firstElement)
    return firstElement;
}


const z = getFirstElement(arrayData);


// console.log('firstElement fuera de la función', z);
const sumaArrow = (nro1, nro2) => nro1 + nro2;

// console.log(sumaArrow(2,4))

// Tipos de variables
// const y let
//Las constantes no pueden cambiar su valor
//Para una variable a la cual se le va a reasignar un valor se utiliza let
// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos
//  los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function getPairNumbers() {
    let n = 0;
    for (let i = 0; i <= 1000; i+=2) {
        console.log(i)
        n += i;

    }
    return n;
}

console.log("hola", getPairNumbers());