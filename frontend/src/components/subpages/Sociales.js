import React from 'react';

const Sociales = (props) => {
    return (
            <div className="sociales">
                <div className="social">
                    <h2>Redes Sociales</h2>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="social">
                    <h2>Data Fiscal</h2>
                    <img src="img/QR.jpg" alt="QR"/>
                </div>
                <div className="social">
                    <h2>Ruta Hogar</h2>
                    <ul>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Términos y condiciones</a></li>
                        <li><a href="#">Condiciones de pago</a></li>
                        <li><a href="#">FAQ (Preguntas más frecuentes)</a></li>
                    </ul>
                </div>
                <div className="social">
                    <h2>Contacto</h2>
                    <ul>
                        <li>Teléfono: (3447) 54-2433</li>
                        <li>Dirección: San Martín 500</li>
                        <li>Email: rutahogar@gmail.com</li>
                    </ul>
                </div>
            </div>
            );
}

export default Sociales;