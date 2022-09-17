import React from 'react';
import BreadCrumb from '../components/layout/BreadCrumb';
import Espacio from '../components/layout/Espacio';
import ProductosNuevos from '../components/subpages/ProductosNuevos';

const NuevosPage = (props) => {
    return (
            <main className="holder">
                <BreadCrumb nombre='Nuevos'/>
                <Espacio height='10px'/>
                <div className="nuevosContainer">
                    <div className="nuevos">
                        <h2><i className="fa fa-couch"></i> Productos Nuevos</h2>
                        <ProductosNuevos />
                    </div>
                    <div className="nuevosFaq">
                        <h2><i className="fas fa-question-circle"></i> Preguntas</h2>
                        <p>No dudes en consultar nuestras:<br/>Preguntas más frecuentes</p>
                        <h2><i className="fas fa-phone"></i> Contacto</h2>
                        <p>Teléfono: (3447) 54-2433</p>
                        <p>Dirección: San Martín 500</p>
                        <p>Email: contacto@rutahogar.com</p>
                    </div>
                </div>
            </main>
            );
}

export default NuevosPage;