import React from 'react';
import Espacio from '../layout/Espacio';
import ListaCheckBoxColores from '../subpages/ListaCheckBoxColores';

const FormularioFiltro = (props) => {
    return (
            <form onChange={props.change}>
                <div className="row">
                    <div className="col-md-12">
                        <h5>Filtrar por Precio</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" className="form-control" id="minimo" name="minimo" placeholder="Precio Minimo" />
                        <Espacio height='5px'/>
                        <input type="text" className="form-control" id="maximo" name="maximo" placeholder="Precio Maximo"/>
                    </div>
                </div>
                <Espacio height='10px'/>
                <div className="row">
                    <div className="col-md-12">
                        <h5>Filtrar por Color</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="filtrosColor">
                            <ListaCheckBoxColores />
                        </div>
                    </div>
                </div>
                <Espacio height='10px'/>
                <div className="row">
                    <div className="col-md-12">
                        <h5>Filtrar por Material</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <select className="form-control" id="material">
                            <option>Cualquier Material</option>
                            <option value="C">Ca&ntilde;o reforzado</option>
                            <option value="E">Ecocuero</option>
                        </select>

                    </div>
                </div>
            </form>
            );
}

export default FormularioFiltro;