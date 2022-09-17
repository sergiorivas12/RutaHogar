import React from 'react';
import Producto from '../layout/Producto';

const ProductosNuevos = (props) => {
    let productos = [
        {
            "img": "img/nueva1.jpg",
            "titulo": "Combo x6 Uni. Silla Andina Chenille Chocolate",
            "precio": "$50,999.00",
        },
        {
            "img": "img/nueva2.jpg",
            "titulo": "Combo x6 Uni. Silla Andina Chenille Cielo",
            "precio": "$50,999.00",
        },
        {
            "img": "img/nueva3.jpeg",
            "titulo": "Sofá Esquinero de 2.10 Mts Hammer Gris Oscuro",
            "precio": "$69,999.00",
        },
        {
            "img": "img/nueva4.jpeg",
            "titulo": "Sillón Matero de 1 Cuerpo Chenille Gris Oscuro",
            "precio": "$9,999.00",
        },
        {
            "img": "img/nueva5.jpeg",
            "titulo": "Sillón Matero de 1 Cuerpo Chenille Gris Claro",
            "precio": "$9,999.00",
        },
        {
            "img": "img/nueva6.jpeg",
            "titulo": "Sillón Individual con apoya Brazos 1 cuerpo Tostado",
            "precio": "$13,999.00",
        },
        {
            "img": "img/nueva7.jpeg",
            "titulo": "Sillón Individual con apoya Brazos 1 cuerpo Gris Oscuro",
            "precio": "$13,999.00",
        },
        {
            "img": "img/nueva8.jpeg",
            "titulo": "Sillón Individual con apoya Brazos 1 cuerpo Gris Claro",
            "precio": "$13,999.00",
        },
    ];
    return (
            <div className="productosNuevos">
                {productos.map(producto => <Producto class='productoNuevo' img={producto.img} titulo={producto.titulo} precio={producto.precio} />)}
            </div>
            );
}

export default ProductosNuevos;