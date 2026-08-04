import { useNavigate } from "react-router-dom"
import "../../../css/AuthCss/Sidebar.css"
import logo from "../../../imagenes/LOGO-ROJO recortado.png"

export default function Sidebar() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("nova_token")
        navigate("/login")
    }

    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <p className="sidebar-label">PANEL ADMIN</p>
                <img src={logo} className="sidebar-logo" alt="Nova Studio" />

                <nav className="sidebar-menu">
                    <a href="/dashboard" className="sidebar-menu-item sidebar-menu-item--active">
                        <i className="bi bi-box-seam"></i>
                        Gestión de paquetes
                    </a>
                </nav>
            </div>

            <button onClick={handleLogout} className="sidebar-logout">
                <i className="bi bi-box-arrow-left"></i>
                Cerrar sesión
            </button>
        </aside>
    )
}