import { useState, useEffect } from "react"

import Sidebar from "../global-components/Sidebar"
import TablaPaquetes from "../global-components/TablaPaquetes"
import ModalPaquete from "../global-components/ModalPaquete"
import ModalConfirmacion from "../global-components/ModalConfirmacion"
import Toast from "../global-components/Toast"
import PaqueteAdminController from "../controllers/PaqueteAdminController"
import "../../../css/AuthCss/Dashboard.css"

export default function Dashboard() {
    const [paquetes, setPaquetes] = useState([])
    const [cargando, setCargando] = useState(true)

    const [modalPaquete, setModalPaquete] = useState(null) // { modo: "crear"|"editar", paquete: {...} } | null
    const [paqueteAEliminar, setPaqueteAEliminar] = useState(null)
    const [toast, setToast] = useState(null) // { titulo, mensaje } | null

    useEffect(() => {
        cargarPaquetes()
    }, [])

    const cargarPaquetes = async () => {
        try {
            const data = await PaqueteAdminController.findALL()
            setPaquetes(data)
        } catch (err) {
            console.log(err)
        } finally {
            setCargando(false)
        }
    }

    // ----- Crear / Editar -----
    const abrirCrear = () => setModalPaquete({ modo: "crear", paquete: null })
    const abrirEditar = (paquete) => setModalPaquete({ modo: "editar", paquete })
    const cerrarModalPaquete = () => setModalPaquete(null)

    const handleGuardado = async () => {
        const eraEdicion = modalPaquete.modo === "editar"
        const nombrePaquete = modalPaquete.paquete?.nombre

        setModalPaquete(null)
        await cargarPaquetes()

        setToast({
            titulo: eraEdicion ? "Paquete actualizado" : "Paquete creado",
            mensaje: eraEdicion
                ? `El paquete ${nombrePaquete} ahora está actualizado en el sitio público.`
                : "El nuevo paquete ya está visible en el sitio público."
        })
    }

    // ----- Eliminar -----
    const abrirConfirmarEliminar = (paquete) => setPaqueteAEliminar(paquete)
    const cerrarConfirmarEliminar = () => setPaqueteAEliminar(null)

    const handleEliminar = async () => {
        try {
            await PaqueteAdminController.eliminar(paqueteAEliminar.id)
            setPaqueteAEliminar(null)
            await cargarPaquetes()
            setToast({
                titulo: "Paquete eliminado",
                mensaje: `El paquete ${paqueteAEliminar.nombre} fue eliminado correctamente.`
            })
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="dashboard-layout">
            <Sidebar />

            <main className="dashboard-content">
                <div className="dashboard-header">
                    <div>
                        <h1>Gestión de <span>paquetes</span></h1>
                        <p>Administra los paquetes de servicios visibles en tu sitio público</p>
                    </div>
                    <button className="dashboard-nuevo-boton" onClick={abrirCrear}>
                        <i className="bi bi-plus-lg"></i>
                        NUEVO PAQUETE
                    </button>
                </div>

                {cargando ? (
                    <p>Cargando paquetes...</p>
                ) : (
                    <TablaPaquetes
                        paquetes={paquetes}
                        onEditar={abrirEditar}
                        onEliminar={abrirConfirmarEliminar}
                        onCambio={cargarPaquetes}
                    />
                )}
            </main>

            {modalPaquete && (
                <ModalPaquete
                    modo={modalPaquete.modo}
                    paqueteInicial={modalPaquete.paquete}
                    onClose={cerrarModalPaquete}
                    onGuardado={handleGuardado}
                />
            )}

            {paqueteAEliminar && (
                <ModalConfirmacion
                    titulo="¿Eliminar este paquete?"
                    mensaje={`Esta acción es irreversible. El paquete ${paqueteAEliminar.nombre} será eliminado permanentemente.`}
                    onCancelar={cerrarConfirmarEliminar}
                    onConfirmar={handleEliminar}
                />
            )}

            {toast && (
                <Toast
                    titulo={toast.titulo}
                    mensaje={toast.mensaje}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    )
}