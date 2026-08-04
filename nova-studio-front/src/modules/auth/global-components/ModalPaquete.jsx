import { useState, useEffect } from "react"
import "../../../css/AuthCss/ModalPaquete.css"
import CategoriaController from "../controllers/CategoriaController"
import PaqueteAdminController from "../controllers/PaqueteAdminController"

export default function ModalPaquete({ modo, paqueteInicial, onClose, onGuardado }) {
    const [categorias, setCategorias] = useState([])
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [idCategoria, setIdCategoria] = useState("")
    const [incluyeTexto, setIncluyeTexto] = useState("")
    const [activo, setActivo] = useState(true)
    const [error, setError] = useState(null)
    const [guardando, setGuardando] = useState(false)

    useEffect(() => {
        CategoriaController.findAll().then(setCategorias).catch(console.log)
    }, [])

    useEffect(() => {
        if (modo === "editar" && paqueteInicial) {
            setNombre(paqueteInicial.nombre)
            setDescripcion(paqueteInicial.descripcion)
            setIdCategoria(paqueteInicial.categoria.id)
            setIncluyeTexto(paqueteInicial.incluye.join("\n"))
            setActivo(paqueteInicial.activo)
        }
    }, [modo, paqueteInicial])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setGuardando(true)

        const paqueteDto = {
            nombre,
            descripcion,
            ordenAparicion: paqueteInicial?.ordenAparicion ?? 1,
            activo,
            incluye: incluyeTexto.split("\n").map(linea => linea.trim()).filter(linea => linea.length > 0),
            idCategoria: Number(idCategoria)
        }

        try {
            if (modo === "crear") {
                await PaqueteAdminController.crear(paqueteDto)
            } else {
                await PaqueteAdminController.actualizar(paqueteInicial.id, paqueteDto)
            }
            onGuardado()
        } catch (err) {
            setError(err.message)
        } finally {
            setGuardando(false)
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-paquete">

                <div className="modal-header">
                    <div>
                        <h2>{modo === "crear" ? "Nuevo" : "Editar"} <span>paquete</span></h2>
                        <p>Los campos con * son obligatorios</p>
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="modal-row">
                        <div className="modal-campo">
                            <label>NOMBRE DEL PAQUETE *</label>
                            <input
                                type="text"
                                placeholder="Ej: Bloom"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>

                        <div className="modal-campo">
                            <label>CATEGORÍA *</label>
                            <select
                                value={idCategoria}
                                onChange={(e) => setIdCategoria(e.target.value)}
                                required
                            >
                                <option value="" disabled>Selecciona una categoría</option>
                                {categorias.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="modal-campo">
                        <label>DESCRIPCIÓN CORTA *</label>
                        <input
                            type="text"
                            placeholder="Frase breve para el sitio público"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>

                    <div className="modal-campo">
                        <label>QUÉ INCLUYE *</label>
                        <textarea
                            rows={4}
                            placeholder={"Diseño de feed\nLevantamiento de contenido\nEquipo cámaras + drone..."}
                            value={incluyeTexto}
                            onChange={(e) => setIncluyeTexto(e.target.value)}
                            required
                        />
                        <p className="modal-tip">
                            <strong>Tip:</strong> cada línea se mostrará como un bullet en la tarjeta pública
                        </p>
                    </div>

                    {error && <p className="modal-error">{error}</p>}

                    <div className="modal-footer">
                        <label className="modal-activo-toggle">
                            <button
                                type="button"
                                className={`tp-switch ${activo ? "tp-switch--on" : ""}`}
                                onClick={() => setActivo(!activo)}
                            >
                                <span className="tp-switch-circle"></span>
                            </button>
                            Paquete activo
                        </label>

                        <div className="modal-botones">
                            <button type="button" className="modal-cancelar" onClick={onClose}>
                                CANCELAR
                            </button>
                            <button type="submit" className="modal-guardar" disabled={guardando}>
                                <i className="bi bi-save"></i>
                                {guardando ? "GUARDANDO..." : "GUARDAR"}
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}