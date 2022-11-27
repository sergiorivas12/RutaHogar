import React, {useState} from 'react';
import axios from 'axios';
import Espacio from '../layout/Espacio';

const textAreaStyle = {height: 260};
const FormularioContacto = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
                ...oldData,
                [name]: value
            }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre (*)</label>
                                    <input className="form-control" id="nombre" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email (*)</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Ingrese Email" value={formData.email} onChange={handleChange}/>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="asunto">Telefono</label>
                                    <input className="form-control" id="telefono" name="telefono" placeholder="Telefono" value={formData.telefono} onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="asunto">Mensaje</label>
                                    <textarea style={textAreaStyle} className="form-control" id="mensaje" name="mensaje" placeholder="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                                </div>
                            </div>
                        </div>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
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