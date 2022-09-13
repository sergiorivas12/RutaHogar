import React from 'react';

const Caja = (props) => {
    return (
            <div className='card cajas'>
                <i className={props.iClass}></i>
                {props.cajaTitulo}
                <p>{props.cajaSubtitulo}</p>
            </div>
            );
}

export default Caja;