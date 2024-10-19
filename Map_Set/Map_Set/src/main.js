import { contarFrecuenciaPalabras, esUnico, verifyUnique } from './helper/script.js';

const texto = "Este es un texto con varias palabras, pero no todas son iguales. Esto es una prueba de la función contarFrecuenciaPalabras";

const palabras = texto.split(' ');

console.log(contarFrecuenciaPalabras(texto));


console.log(esUnico(texto));
console.log(verifyUnique(texto));