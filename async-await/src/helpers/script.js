/**
 * Funcion getUsers que reañoza una peticion a una API
 * https://jsonplaceholder.typicode.com/todos
 */
const urlData = import.meta.env.VITE_API_URL;

export const getUsers = () => {
    const data = fetch(urlData);
    data.then((response) => {
        if(!response.ok) {
            throw new Error('Error en la peticion');
        }
        console.log("La respuesta es:", response);
        return response.json();
    })
    .then((data) => {
        console.log("La respuesta es:", data);
    })
    .catch((error) => {
        console.log("Error data:", error);
    });
}

export const getUsersAsyncAwait = async () => {
    try{
        const response = await fetch(urlData);
        if(!response.ok) {
            throw new Error('Error en la peticion');
        }
        const data = await response.json();
        console.log("La respuesta es:", data);
    } catch(error) {
        console.log("Error data:", error);
    }
};

// swapi.dev/api/people
// starwars-visualguide

/**
 * crea dos funciones, una con promesas y otra con async await que obtenga los personajes de Star Wars(nombre, altura y la imagen)
 * y que guarde la informacion en el localStorage
 */

