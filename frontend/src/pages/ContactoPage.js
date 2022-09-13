import React from 'react';
import BreadCrumb from '../components/layout/BreadCrumb';
import Espacio from '../components/layout/Espacio';
import Mapa from '../components/layout/Mapa';
import Card from '../components/layout/Card';
import FormularioContacto from '../components/subpages/FormularioContacto';

const ContactoPage = (props) => {
    return (
            <main className="holder">
                <BreadCrumb nombre='Contacto'/>
                <Espacio height='10px'/>
                <Card iClass='fas fa-address-card' nombre='Contacto'/>
                <Espacio height='10px'/>
                <Mapa />
                <Espacio height='25px'/>
                <FormularioContacto />
                <Espacio height='10px'/>
                <Card cardClass='mensajeContacto' iClass='fas fa-question-circle' nombre=' Consultas por compra online: (3447) 54-2433 || contacto@rutahogar.com'/>
            </main>
            );
}

export default ContactoPage;