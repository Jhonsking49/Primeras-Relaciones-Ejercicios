/**
 * desarrolla una funcion que recupere todas las cartas de Pokemon de hhtp://localhost:3000/pokemons utilizando async/await y 
 * almacenandolas en un map para acceso rapido por nombre
 */
export const getPokemons = async () => {
    try {
        const url = 'http://localhost:3000/pokemons';
        const pokemonMap = new Map();
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const pokemons = await response.json();
        pokemons.forEach(pokemon => pokemonMap.set(pokemon.name, pokemon));

        console.log('Pokemon cargados correctamente!');
        console.log(pokemonMap);
    } catch (error) {
    console.error('Error fetching Pokémon cards:', error);
    }

    return pokemonMap;
}


export const addCard = async (pokemonId, quantity) => {
    try {
        const response = await fetch(`http://localhost:3000/pokemons/${pokemonId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity }),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Carta agregada correctamente:', data);
    } catch (error) {
        console.error('Error agregando carta:', error);
    }
};

export const removeCard = async (pokemonId) => {
    try {
        const response = await fetch(`http://localhost:3000/pokemons/${pokemonId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Carta eliminada correctamente:', data);
    } catch (error) {
        console.error('Error eliminando carta:', error);
    }
};