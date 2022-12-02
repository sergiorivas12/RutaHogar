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
            const response = await axios.get('http://localhost:3000/api/productos?sn_home=1');
            setProductos(response.data);
            setLoading(false);
        };
        cargarProductos();
    }, []);
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