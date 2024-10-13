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

