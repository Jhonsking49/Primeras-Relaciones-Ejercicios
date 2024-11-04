/**
 * desarrolla una funcion que recupere todas las cartas de Pokemon de hhtp://localhost:3000/pokemons utilizando async/await y 
 * almacenandolas en un map para acceso rapido por nombre
 */
// Función para obtener todas las cartas de Pokémon y almacenarlas en un Map usando el ID como clave
export const getPokemons = async () => {
    const url = 'http://localhost:3000/pokemons';
    const pokemonMap = new Map();

    try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const pokemons = await response.json();

    pokemons.forEach(pokemon => 
        pokemonMap.set(pokemon.id, pokemon));

    console.log('Pokémon cargados correctamente!');
    } catch (error) {
    console.error('Error fetching Pokémon cards:', error);
    }

    return pokemonMap;
};



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

export const renderCards = (pokemonMap) => {
    const cards = document.getElementById('cards');
    cards.innerHTML = '';
    pokemonMap.forEach((pokemon, id) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${pokemon.name}</h2>
            <p>${pokemon.description}</p>
            <button class="btn-remove">Eliminar</button>
        `;
        card.querySelector('.btn-remove').addEventListener('click', () => {
            removeCard(id);
        });
        cards.appendChild(card);
    });
};

export const filterPokemons = (pokemonMap, filter) => {
    const filteredPokemonMap = new Map();
    pokemonMap.forEach((pokemon, id) => {
        if (pokemon.name.toLowerCase().includes(filter.toLowerCase())) {
            filteredPokemonMap.set(id, pokemon);
        }
    });
    return filteredPokemonMap;
};