import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Producto from '../layout/Producto';

const Productos = (props) => {
    useEffect(() => {
        props.cargarProductos();
    }, []);

    return (
            <div id="productos" className="productos list">
                {props.loading ? (
                                    <p>Cargando...</p>
                                    ) : (
                            props.productos.map((producto, index) => <Producto key={index} img={producto.imagen} titulo={producto.nombre} precio={producto.precio} caracteristicas={producto.caracteristicas}/>)
                            )}
            </div>
            );
}

export default Productos;