import React from 'react';
import CheckBox from '../layout/CheckBox';

const ListaCheckBoxColores = (props) => {
    return (
            <ol>
                <li>
                <CheckBox nombre="Arena" id="color" />
            </li>
            <li>
            <CheckBox nombre="Beige" id="color" />
            </li>
            <li>
            <CheckBox nombre="Blanco" id="color" />
            </li>
            <li>
            <CheckBox nombre="Bordo" id="color" />
            </li>
            <li>
            <CheckBox nombre="Chocolate" id="color" />
            </li>
            <li>
            <CheckBox nombre="Combinado Blanco con Roble" id="color" />
            </li>
            <li>
            <CheckBox nombre="Combinado Negro con Roble" id="color" />
            </li>
            <li>
            <CheckBox nombre="Gris Claro" id="color" />
            </li>
            <li>
            <CheckBox nombre="Gris Medio" id="color" />
            </li>
            <li>
            <CheckBox nombre="Gris Oscuro" id="color" />
            </li>
            <li>
            <CheckBox nombre="Magenta Turquesa" id="color" />
            </li>
            <li>
            <CheckBox nombre="Negro con Roble" id="color" />
            </li>
            <li>
            <CheckBox nombre="Roble Medio" id="color" />
            </li>
            <li>
            <CheckBox nombre="Rojo" id="color" />
            </li>
            <li>
            <CheckBox nombre="Tostado" id="color" />
            </li>
            </ol>
            );
}

export default ListaCheckBoxColores;