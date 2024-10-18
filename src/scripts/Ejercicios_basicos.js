// Relacion de ejercicios básicos

/**
 * 1. Dado los metodos filter y map obten los numero pares e impares de un array de numeros
 * @param {array} array 
 * @returns 
 */
export const ParesoImpares = (array) => {
    let pares = array.filter(num => num % 2 === 0)
    let impares = array.filter(num => num % 2 !== 0)

    return { pares, impares}
}

/**
 * dado un array de strings, usa reduce para concatenar los strings
 * @param {array} arrayofstrings
 * @returns array
 */
export const concatena = (array) => {
    return array.reduce((acum, valor) => acum + valor)
}

/**
 * Dado un array de numeros, usa some para verificar si existe algun número mayor a 100 
 * y every para comprobar si todos los numeros son positivos
 * @param {array} array
 * @returns
 */
export const comprobacion = (array) => {
    let mayor100 = array.some(num => num > 100)
    let positivos = array.every(num => num > 0)

    return { mayor100, positivos }
}

/**
 * Dado un array de numeros desordenados, usa sort para ordenarlos de mayor a menor
 * @param {array} array
 * @returns array
 */
export const ordena = (array) => {
    return array.sort((a, b) => b - a)
}

/**
 * Usa el metodo find para obtener el primer numero divisible por 3 de un array 
 * y findIndex para obtener su indice
 * @param {array} array
 * @returns
 */
export const divisiblePor3 = (array) => {
    let divisible = array.find(num => num % 3 === 0)
    let indice = array.findIndex(num => num % 3 === 0)

    return { divisible, indice }
}

/**
 * 
 */