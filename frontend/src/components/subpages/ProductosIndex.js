import React from 'react';
import Producto from '../layout/Producto';

const ProductosIndex = (props) => {
    let productos = [
        {
            "img": "img/almohada1.jpeg",
            "titulo": "Almohada Viscoelastica King Bed & Co",
            "precio": "$6,350.00",
        },
        {
            "img": "img/almohada2.jpeg",
            "titulo": "Almohada Sublime Cannon",
            "precio": "$4,699.00",
        },
        {
            "img": "img/almohada3.jpeg",
            "titulo": "Almohada Viscoelástica Kids Bed & Co.",
            "precio": "$3,099.00",
        },
        {
            "img": "img/almohada4.jpeg",
            "titulo": "Almohada Viscoelástica Relax Bed & Co.",
            "precio": "$3,799.00",
        },
        {
            "img": "img/almohada5.jpeg",
            "titulo": "Almohada viscoelastica Cervical Bed&Co",
            "precio": "$4,950.00",
        },
        {
            "img": "img/almohada6.jpeg",
            "titulo": "Almohada viscoelastica Clasica Bed&Co",
            "precio": "$4,950.00",
        },
    ];
    return (
            <div className="productos">
                {productos.map(producto => <Producto img={producto.img} titulo={producto.titulo} precio={producto.precio} />)}
            </div>
            );
}

export default ProductosIndex;