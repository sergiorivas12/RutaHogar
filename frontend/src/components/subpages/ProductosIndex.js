import React from 'react';
import Producto from '../layout/Producto';

const ProductosIndex = (props) => {
    return (
            <div className="productos">
                <Producto img='img/almohada1.jpeg' titulo='Almohada Viscoelastica King Bed & Co' precio='$6,350.00'/>
                <Producto img='img/almohada2.jpeg' titulo='Almohada Sublime Cannon' precio='$4,699.00'/>
                <Producto img='img/almohada3.jpeg' titulo='Almohada Viscoelástica Kids Bed & Co.' precio='$3,099.00'/>
                <Producto img='img/almohada4.jpeg' titulo='Almohada Viscoelástica Relax Bed & Co.' precio='$3,799.00'/>
                <Producto img='img/almohada5.jpeg' titulo='Almohada viscoelastica Cervical Bed&Co' precio='$4,950.00'/>
                <Producto img='img/almohada6.jpeg' titulo='Almohada viscoelastica Clasica Bed&Co' precio='$4,950.00'/>
            </div>
            );
}

export default ProductosIndex;