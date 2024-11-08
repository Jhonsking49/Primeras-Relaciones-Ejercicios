import { receiveData, getCard, addCard, deleteCard, filterByAbilities } from "./helpers/script.js";

const dataURL = import.meta.env.VITE_API_URL;

const btnRecibirDatos = document.getElementById("btnRecibirDatos");
const btnGetCard = document.getElementById("btnGetCard");
const btnAddCard = document.getElementById("btnAddCard");
const btnDeleteCard = document.getElementById("btnDeleteCard");
const btnGetPokeFilter = document.getElementById("btnGetPokeFilter");


const createPokemonCard = (pokemon) => {
    // Convertir cada habilidad en una cadena con su nombre y puntuación
    const habilidades = pokemon.habilidades
        .map(habilidad => `${habilidad.nombre} (${habilidad.puntuacion})`)
        .join(', '); // Puedes usar "\n" si quieres cada habilidad en una nueva línea

    return `
        <div class="pokemon-card" id="pokemon-${pokemon.id}">
            <h3>${pokemon.nombre}</h3>
            <p><strong>Habilidades:</strong> ${habilidades}</p>
            <p><strong>Puntuación Total:</strong> ${pokemon.puntuacionTotal} / ${pokemon.puntuacionMax}</p>
            <p><strong>Precio:</strong> $${pokemon.precio}</p>
        </div>
        `
    ;
};


btnAddCard.addEventListener('click', async () => {
    const nombre = prompt('¿Cuál es el nombre del pokemon?');
    if (nombre) {
        const data = await addCard(nombre);
        list.innerHTML += createPokemonCard(data);
    }
});

// Eliminar un Pokémon al hacer clic en el botón "Eliminar"
btnDeleteCard.addEventListener('click', async () => {
    const id = prompt('¿Cuál es el id del pokemon?');
    if (id) {
        const data = await deleteCard(id);
        const pokemonElement = document.getElementById(pokemon-`${data.id}`);
        if (pokemonElement) {
            pokemonElement.remove();
        }
    }
});

btnGetPokeFilter.addEventListener('click', async () => {
    const abilities = prompt('¿Cuáles son las habilidades que desea filtrar?');
    if (abilities) {
        const data = await filterByAbilities(abilities);
        list.innerHTML = data.map(pokemon => createPokemonCard(pokemon)).join('');
    }
});

receiveData();



/*
btnRecibirDatos.addEventListener("click", async () => {
    const data = await receiveData();
    console.log("Datos recibidos: ", data);
});

btnGetCard.addEventListener("click", async () => {
    const idCarta = prompt("Ingrese el ID de la carta");
    const data = await getCard(idCarta);
    console.log("Carta obtenida: ", data);
});

btnAddCard.addEventListener("click", async () => {
    const nombreCarta = prompt("Ingrese el nombre de la carta");
    const data = await addCard(nombreCarta);
    console.log("Carta añadida: ", data);
});

btnDeleteCard.addEventListener("click", async () => {
    const idCarta = prompt("Ingrese el ID de la carta");
    const data = await deleteCard(idCarta);
    console.log("Carta eliminada: ", data);
});
*/