

// Funcion para sumar dos arrays

export const sumaArrays = (array1, array2) => array1.map((num, index) => num + array2[index]);

// Funcion para eliminar los duplicados de un array

export const eliminarDuplicados = (array) => {
    let uniqueArray = [];
    array.forEach(element => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    return uniqueArray;
}

export const eliminarDuplicados2 = (array) => array.filter((element, index) => array.indexOf(element) === index);

// Funcion para filtrar los numeros pares de un array

export const filtrarPares = (array) => array.filter((num) => num % 2 === 0);

// Funcion para contar el numero de palabras de un texto

export const contarPalabras = (texto) => texto.split(' ').length;

// Funcion para ordenar numeros de un array de menor a mayor

export const ordenarNumeros = (array) => array.sort((a, b) => a -b);

export const ordenarNumeros2 = (array, orden) => {
    if (orden === 'ascendente') {
        return array.sort((a, b) => a - b);
    } else {
        return array.sort((a, b) => b - a);
    }
}

// Funcion para eliminar un elemento de un array

export const eliminarElemento = (array, elemento) => {
    let index = array.indexOf(elemento);
    array.splice(index, 1);
    return array;
}

// Función que devuelva el max y el min de un array

export const maxMin = (array) => {
    let max = array[0];
    let min = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return { max, min };
}

// Función que devuelva el índice de la primera aparición de un elemento en un array

export const indexOf = (array, elemento) => {
    let index = array.indexOf(elemento);
    return index;
}

// Función que divida en fragmentos un array al pasar el tamaño de cada fragmento

export const fragmentar = (array, tamano) => {
    let fragmentos = [];
    for (let i = 0; i < array.length; i += tamano) {
        fragmentos.push(array.slice(i, i + tamano));
    }
    return fragmentos;
}