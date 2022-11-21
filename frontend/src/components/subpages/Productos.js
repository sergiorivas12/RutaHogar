import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Producto from '../layout/Producto';

const Productos = (props) => {
    /*let productos = [
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
     ];*/
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

    return (
            <div id="productos" className="productos list">
                {loading ? (
                                    <p>Cargando...</p>
                                    ) : (
                            productos.map((producto, index) => <Producto key={index} img={producto.imagen} titulo={producto.nombre} precio={producto.precio} caracteristicas={producto.caracteristicas}/>)
                            )}
            </div>
            );
}

export default Productos;