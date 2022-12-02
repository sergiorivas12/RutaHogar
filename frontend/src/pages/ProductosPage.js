import React, { useState, useEffect} from 'react';
import BreadCrumb from '../components/layout/BreadCrumb';
import Espacio from '../components/layout/Espacio';
import Productos from '../components/subpages/Productos';
import FormularioFiltro from '../components/subpages/FormularioFiltro';
import axios from 'axios';

const divStyle = {
    marginLeft: 5,
};

const ProductosPage = (props) => {
    const toggleGrid = e => {
        var element = document.getElementById("productos");
        element.classList.remove("list");
        element.classList.add("grid");
    };

    const toggleList = e => {
        var element = document.getElementById("productos");
        element.classList.remove("grid");
        element.classList.add("list");
    };

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const cargarProductos = async (name,value) => {
        setLoading(true);
        var url = 'http://localhost:3000/api/productos';
        if(name != undefined && value != undefined){
            url += '?'+name+"="+value;
        }
        const response = await axios.get(url);
        setProductos(response.data);
        setLoading(false);
    };

    const handleChange = e => {
        const {name, value} = e.target;
        cargarProductos(name,value);
    };

    return (
            <main className="holder">
                <BreadCrumb nombre='Productos'/>
                <Espacio height='10px'/>
                <div className="productosContainer">
                    <div>
                        <h2><i className="fa fa-couch"></i> Productos</h2>
                        <div className="row">
                            <div className="col-md-3">
                                <FormularioFiltro change={handleChange}/>
                            </div>
                            <div className="col-md-9">
                                <div style={divStyle}>
                                    <i className="productosGrid" onClick={toggleGrid}>&nbsp;&nbsp;&nbsp;&nbsp;</i>
                                    &nbsp;&nbsp;
                                    <i className="productosList" onClick={toggleList}>&nbsp;&nbsp;&nbsp;&nbsp;</i>
                                </div>
                                <Productos cargarProductos={cargarProductos} setProductos={setProductos} productos={productos} setLoading={setLoading} loading={loading}/>
                            </div>
                        </div>
                    </div>
                    <div className="productosSocial">
                        <h4>Redes Sociales</h4>
                        <div>
                            <i className="fa-brands fa-instagram"></i>
                            &nbsp;&nbsp;
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                    </div>
                </div>
            </main>
            );
}

export default ProductosPage;