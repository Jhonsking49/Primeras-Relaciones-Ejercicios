import { insertData, obtenerProducto, eliminarProducto, actualizarProducto } from "./helpers/scripts";

const dataParaInsertar={
    id : 1,
    nombre: 'PruebaProducto5',
    stock: 80,
    imagen: "https//via.placeholder.com/150",
    categoria: 1
};

insertData(dataParaInsertar);

obtenerProducto();

eliminarProducto(1);

actualizarProducto(1, dataParaInsertar);

//  const dataParaInsertar={
//     id : 1,
//     nombre: 'PruebaProducto5',
//     stock: 80,
//     imagen: "https//via.placeholder.com/150",
//     categoria: 1
// };

// //obtenerProducto();
// let updatedData = dataParaInsertar;
// actualizarProducto(1, updatedData)