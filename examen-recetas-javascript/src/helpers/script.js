/**
 * @description Funcion para obtener todas las recetas
 * @param {URL} dataUrl 
 * @returns Devuelve un array de recetas
 */
export const getRecetas = async(dataUrl) => {
    try {
        const response = await fetch(`${dataUrl}`);
        if(!response.ok) {
            throw new Error("Error al obtener los datos de las recetas");
        }
        const data = await response.json();
        console.log("Las recetas son : ", data);
        const dataMap = new Map();
        return data;
    } catch(error) {
        console.error(error);
    }
}
/*
export const getRecipesCache = async (url) => {
    try {
        const localtrue = localStorage.getItem("recetas-cache");
        const timestamp = Date.now();
        const data = getRecetas(url);
        const datelocal = localStorage.getItem("recetas-cache", "timestamp");
        if(localtrue.ok) {
            throw new Error("LocalStorage ya tiene la clave recetas-cache");
            if(datelocal >= 5000) {
                localStorage.setItem("recetas-cache", "timestamp" = timestamp)
            }
        } else {
            localStorage.setItem("recetas-cache", data);
            localStorage.setItem("recetas-cache", "timestamp" = timestamp);
        }
    } catch(error) {
        console.error(error);
    }
}
*/

/**
 * @description Funcion para filtrar las recetas dependiendo de su tiempo de duracion
 * @param {Array of Objects} recetas 
 * @param {number} minTime 
 * @param {number} maxTime 
 * @returns {Array of Objects} Array de recetas que cumplen con la duracion estimada
 */
export const filterByTime = async (recetas, minTime, maxTime) => {
    try {
        if(minTime >= maxTime){
            throw new Error("El tiempo minimo no puede se mayor o igual que el tiempo máximo");
        } else {
            const recetasFiltradas = [];
            let count = 0;
            recetas.forEach(receta => {
                if(receta.tiempo >= minTime && receta.tiempo <= maxTime) {
                    recetasFiltradas.push(receta)
                    count += 1;
                }
            });
            if(count === 0){
                throw new Error("No hay ninguna receta que dure mas que " + minTime + " y menos que " + maxTime +".");
            }
            return recetasFiltradas;
        }
    } catch(error){
        console.error(error);
    }
}

/**
 * @description Funcion para obtener los id de un listado de objetos 
 * @param {Array of objects} recetas 
 * @returns Array of number
 */
export const getIdRecetas = async (recetas) => {
    try {
        const idRecetas = new Array();
        recetas.forEach(receta => {
            idRecetas.push(receta.id)
        })
        if(idRecetas.length() === 0){
            throw new Error("No se han podido obtener los id de las recetas");
        }
        return idRecetas;
    } catch(error) {
        console.error(error);
    }
}

/**
 * @description Funcion para obtener los detalles concretos de cada receta
 * @param {Array} idRecetas 
 * @param {URL} dataUrl 
 * @returns 
 */
export const getRecipeDetails = async (idRecetas, dataUrl) => {
    try {
        let responses = [];
        let details = new Map();
        for(let i = 0; i<= idRecetas; i++){
            let id = idRecetas[i];
            const response = await fetch(`${dataUrl}/${id}`);
            const data = await response.json();
            responses.set(data);
        }
        Promise.all(responses).then((resultados) => {
            const result = resultados;
            console.log("Los resultados de los detalles son: ",resultados);
            return result;
        })
    } catch(error){
        console.error(error)
    }
}

/**
 * @description Funcion para ordenar objetos segun el valor de la clave dificultad que el objeto contenga
 * @param {Array of objects} recetas 
 * @returns {Map} Map de objetos ordenados
 */
export const orderRecipesByDifficulty = async (recetas) => {
    try {
        let recetasMap = new Map([
            ["facil",[]],
            ["intermedio", []],
            ["dificil", []],
        ]);

        recetas.forEach(receta => {
            if (receta.dificultad === "facil") {
                recetasMap.set("facil", new Map([receta]));
            } else if (receta.dificultad === "intermedio") {
                recetasMap.set("intermedio", new Map([receta]));
            } else if (receta.dificultad === "dificil") {
                recetasMap.set("dificil", new Map([receta]));
            } else {
                throw new Error("La receta no tiene una dificultad válida");
            }
        });

        return recetasMap;
    } catch (error) {
        console.error(error);
    }
};

/**
 * Funcion que actualiza la valoracion de cada receta
 * @param {number} recetaid 
 * @param {number} nuevaValoracion 
 * @param {URL} dataUrl 
 * @returns 
 */
export const scoreRecipe = async ( recetaid, nuevaValoracion, dataUrl) => {
    try {
        if(nuevaValoracion > 0 && nuevaValoracion < 5){
            const response = await fetch(`${dataUrl}/${recetaid}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({valoracion: nuevaValoracion})
            });
            const data = await response.json();
            return data;
        } else {
            throw new Error("La nueva valoracion tiene un valor inadecuado");
        }
    } catch(error){
        console.error(error);
    }
}

