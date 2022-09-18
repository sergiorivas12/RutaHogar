import React from 'react';

const Producto = (props) => {
    let classProducto = 'producto';
    if ('class' in props) {
        classProducto = props.class;
    }
    return (
            <div className={classProducto}>
                <img src={props.img} alt={props.titulo} className={props.classImg}/>
                <div className="datosProducto">
                    <p>{props.titulo}</p>
                    <p className="precio">{props.precio}</p>
                    {'caracteristicas' in props && props.caracteristicas !== undefined ? props.caracteristicas.map(c => <p className="caracteristicas">{c}</p>) : null}
                </div>
            </div>
            );
}

export default Producto;