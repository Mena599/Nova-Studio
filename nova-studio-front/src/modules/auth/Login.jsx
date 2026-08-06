import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../css/AuthCss/Login.css"
import logo from "../../imagenes/LOGO-BLANCO recortado.png"

export default function Login() {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        try {
            const response = await fetch("http://localhost:8080/api/nova/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuario, password })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message)
            }

            // Ahora
            localStorage.setItem("nova_token", data.data.token)
            window.location.href = "/dashboard"

        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <main className="login-page">
            <div className="login-card">

                <div className="login-izq">
                    <img src={logo} className="login-logo" alt="Nova Studio" />
                    <div className="login-izq-texto">
                        <h2>GESTIÓN DE CONTENIDO</h2>
                        <p>
                            Acceso exclusivo para administradores. Desde aquí gestionas
                            los paquetes que se muestran en el sitio público. Cualquier
                            cambio se refleja en tiempo real.
                        </p>
                    </div>
                </div>

                <div className="login-der">
                    <h2 className="login-titulo">Panel Administrativo</h2>

                    <form onSubmit={handleSubmit}>
                        <label className="login-label">Escribe tu Usuario</label>
                        <input
                            type="text"
                            className="login-input"
                            placeholder="Usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />

                        <label className="login-label">Escribe Contraseña</label>
                        <input
                            type="password"
                            className="login-input"
                            placeholder="••••••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && <p className="login-error">{error}</p>}

                        <button type="submit" className="login-boton">Ingresar</button>
                    </form>

                    <div className="login-nota">
                        <i className="bi bi-lock"></i>
                        <p>
                            <strong>Zona privada.</strong> Este panel es de uso exclusivo
                            del equipo de Nova Studio. Si no eres administrador, regresa
                            al sitio público.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    )
}