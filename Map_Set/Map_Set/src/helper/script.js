/**
 * Dado un string usa map para contar la frecuencia de cada palabra
 * @param {String} texto 
 */
export const contarFrecuenciaPalabras = (palabras) => {
    let palabrasMap = new Map();
    palabras.split(" ").forEach((palabra) => {
        palabrasMap.set(palabra, (palabrasMap.get(palabra) || 0) + 1);
    });
    return palabrasMap;
};

/**
 * Dado un array de texto devolver true o false si se repite alguna de las palabras
 * @param {array} texto 
 * @returns 
 */
export const esUnico = (texto) => new Set(texto.split(" ")).size === 1;


/**
 * Segunda version del ejercicio anterior
 * @param {array} arrayTexto 
 * @returns 
 */
export const verifyUnique = (arrayTexto) => arrayTexto.length === new Set(arrayTexto).size;

// crear un algoritmo para desordenar un array de numeros

export const desordenarNUmeros = (arrayNumeros) => {
    let arrayNuevo = arrayNumeros.slice();
    arrayNuevo.sort((a, b) => a - b);
    return arrayNuevo;
}