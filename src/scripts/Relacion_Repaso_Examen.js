/**
 * @title Simulación de llamadas a una API con Fetch
 * @description Crea una función fetchUserData que simule la llamada a una API para obtener información de un usuario. 
 * Utiliza fetch con una URL de prueba (puedes usar https://jsonplaceholder.typicode.com/users/).
 */
export const fetchData = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => localStorage.setItem('usuario', JSON.stringify(data)))
    return data
}

/**
 * @title Simula una función fetchPostWithError que intente obtener un post de una API que no existe (URL inválida).
 * @description Implementa dos versiones:
 * Una usando .then() y .catch()
 * Otra usando async/await para capturar y manejar el error.
 * Crea un array donde almacenarás los errores ocurridos y utiliza un Set para evitar errores duplicados.
 */
export const fetchPostWithError = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .catch(error => {
            let errorSet = new Set()
            errorSet.add(error)
            return errorSet
        })
    return data
}

/**
 * @title Múltiples Llamadas Asíncronas en Paralelo
 * @description Crea una función fetchMultipleResources que haga varias llamadas asíncronas en paralelo para obtener 
 * tres recursos diferentes: usuarios, posts, y comentarios (https://jsonplaceholder.typicode.com/users, /posts, /comments).
 */
export const fetchMultipleResources = async () => {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
    let comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())

    let usersMap = new Map()
    usersMap.set('users', users)
    let postsMap = new Map()
    postsMap.set('posts', posts)
    let commentsMap = new Map()
    commentsMap.set('comments', comments)

    let usersPromise = Promise.all(usersMap)
    let postsPromise = Promise.all(postsMap)
    let commentsPromise = Promise.all(commentsMap)

    let usersSettledPromise = Promise.allSettled(usersMap)
    let postsSettledPromise = Promise.allSettled(postsMap)
    let commentsSettledPromise = Promise.allSettled(commentsMap)

    return {
        usersPromise,
        postsPromise,
        commentsPromise,
        usersSettledPromise,
        postsSettledPromise,
        commentsSettledPromise
    }
}

/**
 * @title Añadir Producto
 * @description Crear una función que permita añadir un nuevo producto a la base de datos a través de una solicitud POST, 
 * incluyendo una categoriaId para relacionarlo con su categoría.
 */
export const addProduct = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Nuevo Producto',
            body: 'Este es un nuevo producto',
            userId: 1,
            categoryId: 1
        })
    })
        .then(response => response.json())
        .then(data => localStorage.setItem('productos', JSON.stringify(data)))
    return data
}

/**
 * @title Obtener Productos
 * @description Implementar una función que recupere todos los productos de la base de datos mediante una solicitud GET. 
 * Mostrar también el nombre de la categoría correspondiente.
 */
export const getProducts = async (id) => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => localStorage.setItem('productos', JSON.stringify(data)))
    return data.producto
}

/**
 * @title Actualizar Producto
 * @description Desarrollar una función que permita actualizar un producto existente usando una solicitud PATCH, 
 * asegurando que se pueda cambiar también la categoriaId.
 */

export const updateProduct = async (id, data) => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => localStorage.setItem('productos', JSON.stringify(data)))
    return data
}

/**
 * @title Eliminar Productos
 * @description Crear una función que elimine un producto de la base de datos mediante una solicitud DELETE. 
 * Implementar el manejo de múltiples eliminaciones usando Promise.allSettled.
 */
export const deleteProduct = async (id) => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => localStorage.setItem('productos', JSON.stringify(data)))
    return data
}

/**
 * @title Obtener y Crear Categorías
 * @description Implementar funciones que permitan obtener todas las categorías y 
 * crear una nueva categoría. Ejecutar ambas funciones simultáneamente.
 */
export const getCategories = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/categories')
        .then(response => response.json())
        .then(data => localStorage.setItem('categorias', JSON.stringify(data)))
    return data
}

export const createCategory = async (data) => {
    let data = await fetch('https://jsonplaceholder.typicode.com/categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => localStorage.setItem('categorias', JSON.stringify(data)))
    return data
}

/**
 * @title Añadir Comentarios a Productos
 * @description Crear una función que permita añadir comentarios a un producto mediante una solicitud POST, 
 * incluyendo el nombre del usuario, contenido del comentario y calificación.
 */
export const addComment = async (id, data) => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => localStorage.setItem('comentarios', JSON.stringify(data)))
    return data
}

/**
 * @title Filtrar Productos
 * @description Implementar una función que permita filtrar productos por precio y/o stock, usando parámetros de consulta.
 */
export const filterProducts = async (data) => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts?price=${data.precio}&stock=${data.stock}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => localStorage.setItem('productos', JSON.stringify(data)))
    return data
}

/**
 * @title Consultar Precio Histórico
 * @description Crear un endpoint que permita obtener el historial de precios de un producto, implementando una función para mostrar los precios anteriores, utilizando fetch y
 * manipulando los arrays para mostrar los datos.
 */
export const getPriceHistory = async (id) => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/history`)
        .then(response => response.json())
        .then(data => localStorage.setItem('historialPrecios', JSON.stringify(data)))
    return data
}
