/*
import { getRecetas, filterByTime, getIdRecetas, getRecipeDetails, orderRecipesByDifficulty, scoreRecipe } from "./helpers/script";

const urlRecetas = import.meta.env.VITE_URL_RECETAS;
const minTime = 30;
const maxTime = 50;

const btnscore = document.getElementById("btnscore");
getRecetas(urlRecetas).then(data => {
    const recetas = data;
    console.log(data);

    filterByTime(recetas, minTime, maxTime).then(recetasFiltradas => {
        console.log("Las recetas que duran mas que " + minTime + " y menos que " + maxTime +" son: ",recetasFiltradas)
    })

    getIdRecetas(recetas).then(idrecetas => {
        const ids = idrecetas;
        console.log("Los ids de las recetas son: ", ids);

        getRecipeDetails(ids,urlRecetas).then(detalles => {
            console.log("Los detalles de las recetas son: ",detalles);
        })
    })

    orderRecipesByDifficulty(recetas).then(recetaMapeada => {
        console.log("Estas son las recetas ordenadas en un map por su dificultad: ", recetaMapeada);
    })

    btnscore.addEventListener("click", async => {
        const idreceta = prompt("Id de la receta a valorar");
        recetas.forEach(receta => {
            if(receta.id === idreceta){
                const nuevaValoracion = prompt("Valora la receta(la valoracion debe ser entre 1 y 5: ");
                scoreRecipe(idreceta, nuevaValoracion, urlRecetas).then(score => {
                    console.log("La nueva valoracion es: ",score);
                })
            } else {
                console.error("No existe la receta con el id: ",idreceta);
            }
        });

    })
})
*/

import { getRecipesCache } from "./helpers/scriptRepaso";
import { getRecetas } from "./helpers/script";

getRecipesCache().then(recetas => {
    console.log(recetas);
})
