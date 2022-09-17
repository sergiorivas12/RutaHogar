import React from 'react';
import Espacio from '../layout/Espacio';

const textAreaStyle = {height: 260};
const FormularioContacto = (props) => {
    return (
            <div className="row">
                <div className="col-md-4">
                    <div className="contactoRuta">
                        <ol>
                            <li><i className="fas fa-map-marker"></i> <label>San Martin 500</label></li>
                            <li><i className="fas fa-envelope"></i> <label><a href="mailto:rutahogar@gmail.com">Email: rutahogar@gmail.com</a></label></li>
                            <li><i className="fas fa-mobile"></i> <label>(3447) 54-2433</label></li>
                        </ol>
                    </div>
                </div>
                <div className="col-md-8">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre (*)</label>
                                    <input className="form-control" id="nombre" placeholder="Nombre" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email (*)</label>
                                    <input type="email" className="form-control" id="email" placeholder="Ingrese Email" />
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="asunto">Asunto</label>
                                    <input className="form-control" id="asunto" placeholder="Asunto" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="asunto">Mensaje</label>
                                    <textarea style={textAreaStyle} className='form-control' id="mensaje" placeholder="mensaje"></textarea>
                                </div>
                            </div>
                        </div>
                        <Espacio height='10px'/>
                        <div className="row">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-secondary">Enviar Email</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            );
}

export default FormularioContacto;