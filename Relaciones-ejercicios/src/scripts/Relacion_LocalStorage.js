
/**
 * Crea una funcion que acepte un array de objetos(con nombre y edad), guarde este array en localStorage y muestre el contenido de localStorage
 * @param {*} arreglo 
 */
const guardarDatosLocalStorage = (arreglo) => {
    localStorage.setItem('datos', JSON.stringify(arreglo));
    console.log(localStorage.getItem('datos'));
}

/**
 * la funcion anterior y valida que nombre sea una cadena no vacía y edad sea un numero mayor que 0 antes de guardarlo en localStorage
 * @param {*} nombre 
 * @param {*} edad 
 * @returns 
 */
const guardarDatos = (nombre, edad) => {
    if (typeof nombre !== 'string' || !nombre.trim() || typeof edad !== 'number' || edad <= 0) return console.log('Datos inválidos');
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad);
    console.log('Datos guardados');
}

/**
 * Crea una función que permita actualizar la edad de una persona en un array de objetos almacenado en LocalStorage
 * @param {*} nombre 
 * @param {*} nuevaEdad 
 * @returns
 */
const actualizarEdad = (nombre, nuevaEdad) => {
    let personas = JSON.parse(localStorage.getItem('personas')) || [];
    personas = personas.map(p => p.nombre === nombre ? { ...p, edad: nuevaEdad } : p);
    localStorage.setItem('personas', JSON.stringify(personas));
    console.log('Edad actualizada');
}

/**
 * Crea una función que recupere el array de objetos almacenado en LocalStorage y muestre los datos en una lista dentro de un <div> con el id app
 */
const mostrarPersonas = () => {
    let personas = JSON.parse(localStorage.getItem('personas')) || [];
    let lista = personas.map(p => `<li>${p.nombre}: ${p.edad}</li>`).join('');
    document.getElementById('app').innerHTML = `<ul>${lista}</ul>`;
}
