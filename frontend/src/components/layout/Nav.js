import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
            <nav>
                <div className="holder">
                    <ul>
                        <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/productos">Productos</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/nuevos">Nuevos</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/contacto">Ubicacion y Contacto</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/quienesSomos">¿Quienes Somos?</NavLink></li>
                    </ul>
                </div>
            </nav>
            );
}

export default Nav;