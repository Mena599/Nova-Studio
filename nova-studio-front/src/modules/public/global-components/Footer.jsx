import { Link } from 'react-router-dom'
import "../../../css/Footer.css"

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="src/imagenes/LOGO-BLANCO recortado.png" className="footer-logo" alt="Nova-Studio" />
                        <p className="footer-desc">
                            Agencia de marketing digital con<br />
                            el crecimiento real de tu negocio, sin <br />
                            miedo, con estrategia.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h5 className="footer-titulo">Páginas</h5>
                        <ul className="footer-links">
                            <li><Link to="/home">Inicio</Link></li>
                            <li><Link to="/servicios">Servicios</Link></li>
                            <li><Link to="/nosotros">Nosotros</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5 className="footer-titulo">Contacto</h5>
                        <p className="footer-contacto">aranovagency@gmail.com</p>
                        <p className="footer-contacto">+52 777 908 5902</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}