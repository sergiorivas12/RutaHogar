import React from 'react';
import axios from 'axios';
import Producto from '../layout/Producto';
import { useState, useEffect } from 'react';

const ProductosNuevos = (props) => {
    const [cantidad, setCantidad] = useState(0);
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
     ];*/

    //setCantidad(1);
    return (
            <div className="productosNuevos">
                {loading ? (
                                    <p>Cargando...</p>
                                    ) : (
                            productos.map((producto, index) => <Producto key={index} class='productoNuevo' img={producto.imagen} titulo={producto.nombre} precio={producto.precio} />)
                            )}
            </div>
            );
}

export default ProductosNuevos;