import React from 'react';
import Producto from '../layout/Producto';

const Productos = (props) => {
    let productos = [
        {
            "img": "img/silla1.jpg",
            "titulo": "Combo x6 Uni. Silla Andina Chenille Chocolate",
            "precio": "$50,999.00",
            "caracteristicas": ["Silla Andina. Estructura Pino con refuerzo en patas.", "Combo disponible x 6 unidades", "Disponible para entrega inmediata"]
        },
        {
            "img": "img/silla2.jpg",
            "titulo": "Combo x6 Uni. Silla Andina Chenille Cielo",
            "precio": "$50,999.00",
            "caracteristicas": ["Silla Andina. Estructura Pino con refuerzo en patas.", "Combo disponible x 6 unidades", "Disponible para entrega inmediata"]
        },
        {
            "img": "img/silla3.jpeg",
            "titulo": "Sillón Herradura Pana gris Medio",
            "precio": "$18,999.00",
            "caracteristicas": ["Sillón Individual Herradura. Tela pana gamuzada color Gris Medio.", "Disponible para entrega inmediata"]
        },
        {
            "img": "img/silla4.jpeg",
            "titulo": "Sillón Individual con apoya Brazos 1 cuerpo Gris Claro",
            "precio": "$13,999.00",
            "caracteristicas": ["Sillón Matero de 1 cuerpo con Apoya brazo. Tela Chenille Gris claro.", "Disponible para entrega inmediata"]
        },
        {
            "img": "img/silla5.jpeg",
            "titulo": "Sillón Individual con apoya Brazos 1 cuerpo Tostado",
            "precio": "$13,999.00",
            "caracteristicas": ["Sillón Matero de 1 cuerpo con Apoya brazo. Tela Chenille Tostado", "Disponible para entrega inmediata"]
        },
        {
            "img": "img/silla6.jpeg",
            "titulo": "Almohada viscoelastica Clasica Bed&Co",
            "precio": "$4,950.00",
            "caracteristicas": ["Sillón Matero de 1 cuerpo. Tela Chenille Gris Claro", "Disponible para entrega inmediata"]
        },
    ];
    return (
            <div id="productos" className="productos list">
                {productos.map((producto, index) => <Producto key={index} img={producto.img} titulo={producto.titulo} precio={producto.precio} caracteristicas={producto.caracteristicas}/>)}
            </div>
            );
}

export default Productos;