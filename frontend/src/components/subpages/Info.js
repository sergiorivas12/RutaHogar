import React from 'react';
import Caja from '../layout/Caja';

const Info = (props) => {
    return (
            <div className="row">
                <div className="col-md-4">
                    <Caja iClass='fa fa-boxes' cajaTitulo='STOCK PERMAMENTE' cajaSubtitulo='de nuestros productos.'/>
                </div>
                <div className="col-md-4">
                    <Caja iClass='fa fa-shipping-fast' cajaTitulo='ENVIOS INMEDIATOS' cajaSubtitulo='Recibí tus productos de forma rápida y segura.'/>
                </div>
                <div className="col-md-4">
                    <Caja iClass='fa fa-money-bill-alt' cajaTitulo='GRANDES DESCUENTOS EN EFECTIVO' cajaSubtitulo='pagando en nuestro local.'/>
                </div>
            </div>
            );
}

export default Info;