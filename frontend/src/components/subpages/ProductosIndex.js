import React from 'react';
import axios from 'axios';
import Producto from '../layout/Producto';
import { useState, useEffect } from 'react';

const ProductosIndex = (props) => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };
        cargarProductos();
    }, []);
    /*let productos = [
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
     ];*/
    return (
            <div className="productosIndex">
                {loading ? (
                                    <p>Cargando...</p>
                                    ) : (
                            productos.map((producto, index) => <Producto key={index} img={producto.imagen} titulo={producto.nombre} precio={producto.precio} />)
                            )}
            </div>
            );
}

export default ProductosIndex;