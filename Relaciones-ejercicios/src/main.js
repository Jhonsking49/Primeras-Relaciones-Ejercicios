
//-----------------------------------------------------------Ejercicios Básicos---------------------------------------------------------------------------------------------------------------------------------------------------------
import { ParesoImpares } from "./scripts/Ejercicios_basicos.js";

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

//-----------------------------------------------------------Ejercicios Relaciones---------------------------------------------------------------------------------------------------------------------------------------------------------

import { comprobacion, ordena, divisiblePor3, buscarElemento, contarPalabras, ordenarNumeros, eliminarElemento, maxMin, indexOf, fragmentar } from "./scripts/Relacion_Repaso_Examen.js";

document.getElementById("btnComprobacion").addEventListener("click", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = comprobacion(array);
    console.log("Comprobacion: ", resultado);
});

document.getElementById("btnOrdena").addEventListener("click", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = ordena(array);
    console.log("Orden ascendente: ", resultado);
});

document.getElementById("btnDivisiblePor3").addEventListener("click", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = divisiblePor3(array);
    console.log("Divisible por 3: ", resultado);
});

document.getElementById("btnBuscarElemento").addEventListener("click", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = buscarElemento(array);
    console.log("Elemento encontrado: ", resultado);
});

document.getElementById("btnContarPalabras").addEventListener("click", () => {
    const array = ["Hola", "Mundo", "Hola", "Mundo", "Hola"];
    const resultado = contarPalabras(array);
    console.log("Palabras encontradas: ", resultado);
});

document.getElementById("btnOrdenarNumeros").addEventListener("click", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = ordenarNumeros(array);
    console.log("Orden ascendente: ", resultado);
});

document.getElementById("btnEliminarElemento").addEventListener("click", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = eliminarElemento(array, 3);
    console.log("Elemento eliminado: ", resultado);
});

document.getElementById("btnMaxMin").addEventListener("click", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = maxMin(array);
    console.log("Máximo y mínimo: ", resultado);
});

document.getElementById("btnIndexOf").addEventListener("click", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = indexOf(array, 3);
    console.log("Índice del elemento: ", resultado);
});

document.getElementById("btnFragmentar").addEventListener("click", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = fragmentar(array, 3);
    console.log("Fragmentación: ", resultado);
});

//-----------------------------------------------------------Ejercicios Relaciones II---------------------------------------------------------------------------------------------------------------------------------------------------------

import { sumaArrays } from "./scripts/Relacion_I.js";

document.getElementById("btnSumaArrays").addEventListener("click", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    sumaArrays(arr1, arr2);
});

//-----------------------------------------------------------Ejercicios Relaciones III---------------------------------------------------------------------------------------------------------------------------------------------------------

import { fetchData, fetchPostWithError, fetchMultipleResources, addProduct, getProducts, updateProduct, deleteProduct, getCategories, createCategory, addComment, filterProducts, getPriceHistory } from "./scripts/Relacion_Repaso_Examen.js";

document.getElementById("btnFetchData").addEventListener("click", async () => {
    const data = await fetchData();
    console.log("Datos obtenidos: ", data);
});

document.getElementById("btnFetchPostWithError").addEventListener("click", async () => {
    const data = await fetchPostWithError();
    console.log("Datos obtenidos: ", data);
});

document.getElementById("btnFetchMultipleResources").addEventListener("click", async () => {
    const data = await fetchMultipleResources();
    console.log("Datos obtenidos: ", data);
});

document.getElementById("btnAddProduct").addEventListener("click", async () => {
    const data = await addProduct();
    console.log("Producto añadido: ", data);
});

document.getElementById("btnGetProducts").addEventListener("click", async () => {
    const id = prompt("Ingrese el ID del producto");
    const data = await getProducts(id);
    console.log("Producto obtenido: ", data);
});

document.getElementById("btnUpdateProduct").addEventListener("click", async () => {
    const id = prompt("Ingrese el ID del producto");
    const data = await updateProduct(id);
    console.log("Producto actualizado: ", data);
});

document.getElementById("btnDeleteProduct").addEventListener("click", async () => {
    const id = prompt("Ingrese el ID del producto");
    const data = await deleteProduct(id);
    console.log("Producto eliminado: ", data);
});

