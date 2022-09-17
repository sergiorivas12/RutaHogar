import React from 'react';

const Producto = (props) => {
    let classProducto = 'producto';
    if ('class' in props) {
        classProducto = props.class;
    }
    return (
            <div className={classProducto}>
                <img src={props.img} alt={props.titulo}/>
                <p>{props.titulo}</p>
                <p className="precio">{props.precio}</p>
            </div>
            );
}

export default Producto;