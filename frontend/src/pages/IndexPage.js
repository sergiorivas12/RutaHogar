import React from 'react';
import Espacio from '../components/layout/Espacio';

import Info from '../components/subpages/Info';
import ProductosIndex from '../components/subpages/ProductosIndex';
import Sociales from '../components/subpages/Sociales';

const borderStyle = {
    borderRadius: 5,
};
const IndexPage = (props) => {
    return (
            <main className="holder">
                <div>
                    <img src="img/slide_color_small-min.jpg" width="100%" alt="Ruta Hogar"/>
                </div>
                <Espacio height='10px'/>
                <Info />
                <Espacio height='10px'/>
                <div>
                    <h2 style={borderStyle}>PRODUCTOS NUEVOS</h2>
                </div>
                <Espacio height='10px'/>
                <ProductosIndex />
                <Espacio height='10px'/>
                <Sociales />
            </main>
            );
}

export default IndexPage;