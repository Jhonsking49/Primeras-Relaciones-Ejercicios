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
const VITE_API_URL_IMAGE = import.meta.env.VITE_API_URL_IMAGE;
const url = import.meta.env.VITE_API_URL_2;

export const getPeople = () => {
    const data = fetch(url);
    data.then((response) => {
        if(!response.ok) {
            throw new Error('Error en la peticion');
        }
        console.log("La respuesta es:", response);
        return response.json();
    })
    .then((data) => {
        console.log("La respuesta es:", data);
        localStorage.setItem("personajes", JSON.stringify(data));
    })
    .catch((error) => {
        console.log("Error data:", error);
    });
}

export async function fetchAllCharactersAsyncAwait() {
    try{
        const allCharacters = [];
        const hasnext = true;
        const currentPage = 1;
        while(hasnext) {
            const response = await fetch(`${VITE_API_URL}?page=${currentPage}`);
            if(!response.ok) {
                throw new Error('Error en la peticion');
            }
            const data = await response.json();
            allCharacters.concat(data.results)
            currentPage++;
        }
        //añadir los characters de starwars al localstorage
        localStorage.setItem("Starwars", JSON.stringify(allCharacters));
        //renderizar
        renderCharacters(allCharacters);


    } catch(error) {
        console.log("Error data:", error);
    }
}

function renderCharacters(characters) {
    //1 seleccionamos la etiqueta div donde vamos a renderizar los personajes
    const resultdiv = document.getElementById("app");
    resultdiv.innerHTML = "";
    characters.forEach((character, index) => {
        let characterId = index + 1;
        characterId === 17 ? (characterId = 18) : characterId;
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("personaje");

        character.innerHTML = `
            <div class="imagen">
                <img src="${VITE_API_URL_IMAGE}${characterId}" alt="${character.name}">
            </div>
            <div class="informacion">
                <h2>${character.name}</h2>
                <p>Altura: ${character.height}</p>
            </div>
        `;
        resultdiv.appendChild(personaje);
    });
}

// el promie raise me devuelve la primera promesa que antes se cumpla y el promise all devuelve todas las promesas cuando todas se cumplan


export async function fetchAllCharactersPromiseAll( ) {
    try {
        const promiseArray = [];
        const hasnext = true;
        const currentPage = 1;
        while(hasnext) {
            const response = await fetch(`${VITE_API_URL}?page=${currentPage}`);
            if(!response.ok) {
                throw new Error('Error en la peticion');
            }
            const data = await response.json();
            promiseArray.push(data.results);
            currentPage++;
        }
        //añadir los characters de starwars al localstorage
        localStorage.setItem("Starwars", JSON.stringify(promiseArray));
        //renderizar
        renderCharacters(promiseArray);

    } catch(error) {
    }
}

export async function fetchAllCharactersPromiseSettle( ) {
    try {
        const promiseArray = [];
        const hasnext = true;
        const currentPage = 1;
        while(hasnext) {
            const response = await fetch(`${VITE_API_URL}?page=${currentPage}`);
            if(!response.ok) {
                throw new Error('Error en la peticion');
            }
            const data = await response.json();
            promiseArray.push(data.results);
            currentPage++;
        }
        //añadir los characters de starwars al localstorage
        localStorage.setItem("Starwars", JSON.stringify(promiseArray));
        //renderizar
        renderCharacters(promiseArray);

    } catch(error) {
        console.log("Error data:", error);
    }
}

// ejecutar todas las promesas

export async function fetchAllCharactersPromiseAll2( ) {
    try {
        console.time("fetchAllCharactersPromiseAll");
        const loadingIndicator = document.createElement("div");
        loadingIndicator.textContent = "Cargando...";
        document.getElementById("app").appendChild(loadingIndicator);
        const promiseArray = [];
        for (let i = 1; i <= 9; i++) {
            fetch(`${VITE_API_URL}?page=${i}`)
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Error en la peticion');
                }
                return response.json();
            })
            .catch((error) => {
                console.log("Error data:", error);
            });
        }
        //ejecutar todas las promesas
        const resultsPromiseAll = await Promise.all(promiseArray);
        console.log("ResultadosPromiseAll:", resultsPromiseAll);

        // concatenar los resultados de todas las promesas
        const allCharacters = resultsPromiseAll.reduce((acc, curr) => acc.concat(page.results), []);
        
        //añadir los characters de starwars al localstorage
        localStorage.setItem("Starwars", JSON.stringify(resultsPromiseAll));
        renderCharacters(resultsPromiseAll);
        loadingIndicator.remove();
        console.timeEnd("fetchAllCharactersPromiseAll");
    } catch(error) {
        console.log("Error data:", error);
    }
}

