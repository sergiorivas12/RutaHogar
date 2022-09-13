import React from 'react';
import BreadCrumb from '../components/layout/BreadCrumb';
import Espacio from '../components/layout/Espacio';

const QuienesSomosPage = (props) => {
    return (
            <main className="holder">
                <BreadCrumb nombre='Sobre Nosotros'/>
                <Espacio height='10px'/>
                <div className="row">
                    <div className="col-md-5">
                        <img src="img/quienesSomosRuta.jpg" width="100%" height="100%"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="quienesSomos">Somos Ruta Hogar</h2>
                        <p>Somos una joven empresa familiar, iniciada en el año 2011 en la venta online de muebles listos para armar (en caja), y que, con el correr de los años supo encontrar la oportunidad de cumplir su sueño: instalarse en tierras entrerrianas, más precisamente en la Ciudad de San José, para luego abrir una sucursal en la vecina ciudad de Colón, edificio donde hoy pudo centralizar su renovado showroom , oficinas y atención al cliente .</p>
                        <p>En estos tiempos que nos toca atravesar pudimos optimizar nuestra logística lo cual nos permitió alcanzar ventas en distintos puntos de la provincia de Entre Ríos y de nuestro país.</p>
                        <p>Sin perder el concepto que es nuestro lema “Lo que querés a tu alcance” estamos en la búsqueda constante de bajar costos manteniendo la calidad y la buena atención.</p>
                        <Espacio height='10px'/>
                        <h3>"Lo que soñás, a tu alcance"</h3>
                    </div>
                </div>
                <Espacio height='50px'/>
            </main>
            );
}

export default QuienesSomosPage;