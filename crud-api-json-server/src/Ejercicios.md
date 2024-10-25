# Ejercicios repaso para exmane de javascript

## Ejercicio 1: crear producto

### Enunciado: 
>Crear una función que permita añadir un nuevo producto a la base de datos
>utilizando la solicitud POST e incluyendo una nueva categoría en caso de que no exista

#### Elementos a usar:
 - Fetch para realizar las solicitudes
 - Promesas con Async/Await
 - Busquedas o filtrados en los objetos

### Solución:

```js
const url = "http://localhost:4000/productos";

export const addProduct = async (product) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error("Error en la peticion");
        }
        const data = await response.json();
        console.log("La respuesta es:", data);
    } catch (error) {
        console.log("Error data:", error);
    }
};
```

## Ejercicio 2: obtener todos los productos

### Enunciado: 
>Crear una función que recupere todos los productos de la base de datos mediante la solicitud GET.
> Tambien necesito recuperar el nombre de las categorías asociadas a cada producto
> Detallad la cabecera GET que se envia en las peticiones GET.


#### Nota: 
 - Delete
 - Update(PUT)
#### Elementos a usar:
 - 