import React from 'react';
import CheckBox from '../layout/CheckBox';

const ListaCheckBoxColores = (props) => {
    return (
            <ol>
                <li>
                <CheckBox nombre="Arena" id="color" value="1"/>
            </li>
            <li>
            <CheckBox nombre="Beige" id="color" value="2"/>
            </li>
            <li>
            <CheckBox nombre="Blanco" id="color" value="3"/>
            </li>
            <li>
            <CheckBox nombre="Bordo" id="color" value="4"/>
            </li>
            <li>
            <CheckBox nombre="Chocolate" id="color" value="5"/>
            </li>
            <li>
            <CheckBox nombre="Combinado Blanco con Roble" id="color" value="6"/>
            </li>
            <li>
            <CheckBox nombre="Combinado Negro con Roble" id="color" value="7"/>
            </li>
            <li>
            <CheckBox nombre="Gris Claro" id="color" value="8"/>
            </li>
            <li>
            <CheckBox nombre="Gris Medio" id="color" value="9"/>
            </li>
            <li>
            <CheckBox nombre="Gris Oscuro" id="color" value="10"/>
            </li>
            <li>
            <CheckBox nombre="Magenta Turquesa" id="color" value="11"/>
            </li>
            <li>
            <CheckBox nombre="Negro con Roble" id="color" value="12"/>
            </li>
            <li>
            <CheckBox nombre="Roble Medio" id="color" value="13"/>
            </li>
            <li>
            <CheckBox nombre="Rojo" id="color" value="14"/>
            </li>
            <li>
            <CheckBox nombre="Tostado" id="color" value="15"/>
            </li>
            </ol>
            );
}

export default ListaCheckBoxColores;