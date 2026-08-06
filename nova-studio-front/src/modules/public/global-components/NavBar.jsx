import { Link } from 'react-router-dom'
import '../../../css/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#FEFEFA' }}>
            <div className="container-fluid px-4">

                <a className="navbar-brand" href="#">
                    <img src="src/imagenes/LOGO-ROJO recortado.png" width="160" alt="Nova Studio" />
                </a>

                <div className="d-flex justify-content-center">
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item">
                            <Link className=" nav-link-nova" to="/home">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className=" nav-link-nova" to="/servicios">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className=" nav-link-nova" to="/nosotros">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className=" nav-link-nova" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>

                <Link to="/agendar">
                    <button className="btn-nova px-4 py-2">
                        <i className='bi bi-calendar me-2'></i>
                        Cotizar Ahora
                    </button>
                </Link>

            </div>
        </nav>
    )
}