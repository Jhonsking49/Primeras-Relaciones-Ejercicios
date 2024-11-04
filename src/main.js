import { ParesoImpares } from "./scripts/Ejercicios_basicos";

const arrayNumeros = [1,2,4,5,6,7,8,9,10];

const resultado = ParesoImpares(arrayNumeros);

console.log("Pares: ", resultado.pares);
console.log("Impares: ", resultado.impares);

import { ParesoImpares, concatena, comprobacion, ordena, divisiblePor3, buscarElemento, contarPalabras, ordenarNumeros, eliminarElemento, maxMin, indexOf, fragmentar } from './Relacion_Repaso_Examen.js';
import { sumaArrays } from './Relacion_I.js';

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnEjercicioBasico1").addEventListener("click", ejercicioBasico1);

    document.getElementById("btnEjercicioBasico2").addEventListener("click", ejercicioBasico2);

    document.getElementById("btnSumaArrays").addEventListener("click", () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        sumaArrays(arr1, arr2);
    });

});
