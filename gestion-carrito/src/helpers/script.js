

const dataURL = import.meta.env.VITE_API_POKE;
const multiplier = import.meta.env.VITE_API_MULTIPLIER;

export const receiveData = async () => {
    try {
        const response = await fetch(dataURL);

        if (!response.ok){
            throw new Error('Error al obtener datos');
        }

        const data = await response.json();
        console.log("Datos obtenidos correctamente", data);

        const pokeMap = new Map();

        data.forEach(carta => {
            pokeMap.set(carta.nombre, carta)
        });
        console.log("Listado de cartas por nombre del pokemon: ", pokeMap);

        return data;
    }catch (error){
        console.error(error);
    }
};

export const getCard = async (idCarta) => {
    try {
        const carta = await fetch(`${dataURL}/${idCarta}`);

        if (!carta.ok){
            throw new Error('Error al obtener la carta');
        }

        const data = await carta.json();
        console.log("¡Carta ",data.nombre," añadida al carrito!");

        // console.log("carta --",data);
        return data;

    }catch (error){
        console.error(error);
    }
};

export const addCard = async (nombreCarta) => {
    try {
        const response = await fetch(dataURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre: nombreCarta})
        });

        if (!response.ok){
            throw new Error('Error al añadir la carta');
        }

        const data = await response.json();
        console.log("¡Carta ",data.nombre," añadida al carrito!");

        return data;
    }catch (error){
        console.error(error);
    }
};

export const deleteCard = async (idCarta) => {
    try {
        const response = await fetch(`${dataURL}/${idCarta}`, {
            method: 'DELETE'
        });

        if (!response.ok){
            throw new Error('Error al eliminar la carta');
        }

        const data = await response.json();
        console.log("¡Carta ",data.nombre," eliminada del carrito!");

        return data;
    }catch (error){
        console.error(error);
    }
};

export const updateCard = async (idCarta, nombreCarta) => {
    try {
        const response = await fetch(`${dataURL}/${idCarta}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre: nombreCarta})
        });

        if (!response.ok){
            throw new Error('Error al actualizar la carta');
        }

        const data = await response.json();
        console.log("¡Carta ",data.nombre," actualizada!");

        return data;
    }catch (error){
        console.error(error);
    }
};

/**
 * Filtrar Pokémon por habilidades:
Implementa una función que filtre los Pokémon por habilidades específicas y
devuelva aquellos que las posean.
Utiliza Set para asegurar que no haya habilidades repetidas y usa Map para
almacenar y devolver los resultados
 */

export const filterByAbilities = (pokemons, abilities) => {
    try {
        const filteredPokemons = new Map();

        pokemons.forEach(pokemon => {
            // Crear un conjunto con los nombres de habilidades del Pokémon
            const pokemonAbilities = new Set(pokemon.habilidades.map(habilidad => habilidad.nombre));
            
            // Verificar si alguna habilidad del Pokémon está en el conjunto de habilidades buscadas
            const hasMatchingAbility = abilities.some(ability => pokemonAbilities.has(ability));

            if (hasMatchingAbility) {
                filteredPokemons.set(pokemon.nombre, pokemon);
            }
        });

        return filteredPokemons;
    } catch (error) {
        console.error("Error al filtrar Pokémon por habilidades:", error);
        return new Map();
    }
};

/**
 * Actualizar precios en base al multiplicador:
Crea una función para actualizar los precios de cada carta cuando cambie el
multiplicador en db.json.
Usa Promise.allSettled para manejar las actualizaciones de cada carta,
asegurando que si alguna promesa falla, puedas ver el error específico de esa
carta
 */

export const updatePrices = async (multiplier) => {
    try {
        const response = await fetch(multiplier);

        if (!response.ok){
            throw new Error('Error al obtener el multiplicador');
        }

        const data = await response.json();
        console.log("Multiplicador actualizado: ", data);

        const pokeMap = new Map();

        data.forEach(carta => {
            pokeMap.set(carta.nombre, carta)
        });
        console.log("Listado de cartas por nombre del pokemon: ", pokeMap);

        return data;
    }catch (error){
        console.error(error);
    }
};

export const updatePrice = async (idCarta, precio) => {
    try {
        const response = await fetch(`${dataURL}/${idCarta}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({precio})
        });

        if (!response.ok){
            throw new Error('Error al actualizar la carta');
        }

        const data = await response.json();
        console.log("¡Carta ",data.nombre," actualizada!");

        return data;
    }catch (error){
        console.error(error);
    }
};