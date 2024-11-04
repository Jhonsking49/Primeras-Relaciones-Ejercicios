import { getPokemons, addCard, removeCard, renderCards } from './helpers/script.js';

const main = async () => {
    const pokemonMap = await getPokemons();

    // Verificar el contenido de pokemonMap
    console.log("Mapa de Pokémon:", pokemonMap);
};

main();

renderCards(main);

document.querySelector('.btn-add').addEventListener('click', () => {
    const pokemonId = document.querySelector('.input-pokemon').value;
    const quantity = document.querySelector('.input-quantity').value;
    addCard(pokemonId, quantity);
});

document.querySelector('.btn-clear').addEventListener('click', () => {
    pokemonMap.clear();
    renderCards(pokemonMap);
});