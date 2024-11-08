//----------------------------------------------------------------------------------Promises---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Realizar una descarga de la data de los users que esta en mi web y mostrarla en consola

import { dataloginUsers, users } from "./data/data.js";
import { obtenerUsuarios, verificarLogin} from "./helpers/promises.js";

obtenerUsuarios(users)
    .then(users =>{
        users.forEach(({ name, age }) =>{
            let tiempo=0;
            setTimeout(() =>{
                console.log(`Nombre: ${name}, Edad:${age}`);
            }, 1000*tiempo);
            ++tiempo;
        })
    })
    .catch(error =>{
        console.error(error);
    });

    verificarLogin("username2", '5678', dataloginUsers)
    .then(({ miData, miUser }) => {  
        console.log(`Bienvenido: ${miUser} --> access: ${miData.access}`);
    })
    .catch((error) => {
        console.error(error);
    });

//-------------------------------------------------------------------------Product reduce------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// importaciones librerias
import "./styles/tailwind.css" //importacion de estilos
//importaciones propias
import { products } from "./data/products.js";
import { calcularTotalPrice, productIVA } from "./helpers/product-reduce.js";

//declaracion de variables

const appDiv = document.getElementById("app");

//inicio de ejecucion
appDiv.innerHTML =` ${products.map((product)=>`
    <div class="bg-pink-200 rounded-lg shadow-md p-6 transformation duration-300 hover:scale-95 hover:shadow-xl">
        <div class="w-full h-40 mb-6 owerflow-hidden">
            <img class="w-full h-full object-contain" src="${product.image}" alt="${product.name}">
            <h4 class="text-lg font-bold mb-1">${product.name}</h4>
            <h3 ">${product.price}</h3>
        </div>
    </div>
    `)
.join("")}
`;


//---------------------------------------------------------------------------Map Set---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import { contarFrecuenciaPalabras, verificarUnicos, verificarUnicos_2, shuffle } from "./helpers/map-set.js";

const texto = "Este es un texto con muchas palabras";
const palabras = contarFrecuenciaPalabras(texto);
console.log(palabras);

verificarUnicos(texto);
verificarUnicos_2(texto);

shuffle(texto.split(' '));

