// Hoisting
saludar(); // se ejecuta sin problema
saludarArrow(); // Error: Cannot access 'saludarArrow' before initialization

function saludar() {
    console.log("Hola, bienvenido a Intecap");
}

const saludarArrow = () => {
    console.log("Hola, bienvenido a Intecap con Arrow Function");
}

console.log(nombre); // Error: Cannot access 'nombre' before initialization
console.log(edad); // undefined
console.log(ciudad); // Error: Cannot access 'ciudad' before initialization
// Scope
let nombre = "Juan"; // variable global
var edad = 25; // variable global
const ciudad = "Cali"; // variable global

console.log(nombre); // "Juan"

//declaracion 
function mostrarInfo() {}
class Persona {}
// interface Estudiante {}
funcion() // Error
//inicializacion
let info = "Estudiante de Intecap";
var funcion = function() {};
const arrowFunc = () => {};

//Funciones vs Arrow Functions
let a = 8
function sumar(b) {
    const resultado = a + b;
    return resultado;
}
console.log(sumar(5));

let b = 8
const sumarArrow = (b) => {
    const resultado = a + b;
    return resultado;
}
console.log(sumarArrow(5));

// this en funciones
const objeto2 = {
    nombre: "Ana",
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    },
    saludarArrow: () => {
        console.log(`Hola, soy ${this.nombre}`); 
    },
    saludarArrow2: () => {
        console.log(`Hola, soy ${nombre}`); 
    }
};


function Animal(tipo) {
    this.tipo = tipo;
}

const perro = new Animal("Perro");

const Animal2 = (tipo) => {
    this.tipo = tipo;
}
const gato = new Animal2("Gato"); // NO funciona