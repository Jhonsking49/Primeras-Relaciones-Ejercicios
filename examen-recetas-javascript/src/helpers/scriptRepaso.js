
const db = import.meta.env.VITE_URL_RECU_API;
const port = import.meta.env.VITE_URL_RECU_PORT;

const url = `${db}:${port}/recetas`;

export const getRecipesCache = async () => {
    
    const recipesCache = localStorage.getItem('recipes-cache');
    if(recipesCache && Date.now() -JSON.parse(recipesCache).timestamp < 5 *60 * 1000) {
        return recipesCache.recetas;
    }

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Something went wrong');
        }
        const recetas = await response.json();
        localStorage.setItem('recipes-cache', JSON.stringify({ recetas, timestamp: Date.now()}));
        return recetas;
    } catch (error) {
        console.error('Error:', error);
    }
    
}

export const filterByTime = async (recetas, minTime, maxTime) => {
    if(minTime > maxTime) {
        throw new Error("El tiempo minimo debe ser menor que el maximo");
    }
    return recetas.filter((receta) => receta.tiempo >= minTime && receta.tiempo <= maxTime);
}

export const getRecipeDetails = async (idRecipes) => {
    try {
        const fetchPromises = idRecipes.map((id) => {
            fetch(`${db}:${port}/recetas/${id}`)
                .then(response => response.json())
                .catch(error => console.error('Error al obtener los detalles de la receta: ', error));
        })
        return await Promise.all(fetchPromises);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const orderRecipesByDifficulty = async (recetas) => {
    const difficultyMap = new Map();
    const dificultadesNoRepetidas = new Set();
    recetas.map(({ dificultad }) => {
        dificultadesNoRepetidas.add(dificultad);
        difficultyMap.set(dificultad, (difficultyMap.get(dificultad) || 0) + 1);
    });

    Array.from(dificultadesNoRepetidas).forEach(dificultad => {
        map.set(dificultad, [])
    })

    recetas.forEach((receta) => {
        difficultyMap.get(receta.dificultad).push(receta);
    });

    return difficultyMap;
}

export const scoreRecipe = async (recetas, recetaid, nuevaValoracion) => {
    try {
        if(nuevaValoracion < 0 || nuevaValoracion > 5) {
            throw new Error("La valoracion debe ser entre 0 y 5");
        }
        recetas.map((receta) => receta.id === recetaid ? { ...receta, valoracion: nuevaValoracion } : receta);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const scoreRecipe2 = async (recetas, recetaid, nuevaValoracion) => {
    try {
        if(nuevaValoracion < 0 || nuevaValoracion > 5) {
            throw new Error("La valoracion debe ser entre 0 y 5");
        }
        const response = await fetch(`${db}:${port}/recetas/${recetaid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ valoracion: nuevaValoracion }),
        });
        if(!response.ok) {
            throw new Error('Something went wrong');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const addIngredients = async (recetas, nombreReceta, ArrayIngredientes) => {
    const receta = recetas.find(receta => receta.nombre === nombreReceta);
    if(!receta) {
        throw new Error("No existe la receta con ese nombre");
    }
    const uniqueIngredientes = new Set([... receta.ingredientes, ...ArrayIngredientes]);
    const newIngredientes = [...uniqueIngredientes];

    recetas.ingredientes = newIngredientes;
    try {
        await fetch(`${url}/${receta.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(receta),
            });
    } catch (error) {
        console.error('Error al actualizar la receta: ', error);
    }
}