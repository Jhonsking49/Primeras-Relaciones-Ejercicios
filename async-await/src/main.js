import { fetchAllCharacterPromisesAll } from "./helpers/script.js";

document.getElementById('fetchPersonajes').addEventListener('click', async () => {
    await fetchAllCharacterPromisesAll();
});