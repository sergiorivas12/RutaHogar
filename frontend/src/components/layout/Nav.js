import React from 'react';
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
            <nav>
                <div className="holder">
                    <ul>
                        <li><Link to="/index">Home</Link></li>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/nuevos">Nuevos</Link></li>
                        <li><Link to="/contacto">Ubicacion y Contacto</Link></li>
                        <li><Link to="/quienesSomos">¿Quienes Somos?</Link></li>
                    </ul>
                </div>
            </nav>
            );
}

export default Nav;