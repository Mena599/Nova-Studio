import { useState, useEffect } from "react"
import "../../../css/AuthCss/TablaPaquetes.css"
import PaqueteAdminController from "../controllers/PaqueteAdminController"

const ITEMS_POR_PAGINA = 5

export default function TablaPaquetes({ paquetes, onEditar, onEliminar, onCambio }) {
    const [filtro, setFiltro] = useState("todos")
    const [pagina, setPagina] = useState(1)

    const categorias = [
        { slug: "todos", label: "TODOS" },
        { slug: "redes", label: "REDES SOCIALES" },
        { slug: "ugc", label: "UGC" },
        { slug: "branding", label: "BRANDING" },
    ]

    const paquetesFiltrados = filtro === "todos"
        ? paquetes
        : paquetes.filter(p => p.categoria.slug === filtro)

    const totalPaginas = Math.max(1, Math.ceil(paquetesFiltrados.length / ITEMS_POR_PAGINA))

    const inicio = (pagina - 1) * ITEMS_POR_PAGINA
    const paquetesPagina = paquetesFiltrados.slice(inicio, inicio + ITEMS_POR_PAGINA)

    // si cambias de filtro, siempre regresa a la página 1
    useEffect(() => {
        setPagina(1)
    }, [filtro])

    const cambiarFiltro = (slug) => {
        setFiltro(slug)
    }

    const irPagina = (num) => {
        if (num < 1 || num > totalPaginas) return
        setPagina(num)
    }

    const handleToggleActivo = async (paquete) => {
        try {
            const actualizado = {
                nombre: paquete.nombre,
                descripcion: paquete.descripcion,
                ordenAparicion: paquete.ordenAparicion,
                activo: !paquete.activo,
                incluye: paquete.incluye,
                idCategoria: paquete.categoria.id
            }
            await PaqueteAdminController.actualizar(paquete.id, actualizado)
            onCambio()
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="tabla-paquetes-wrapper">

            <div className="tabla-tabs">
                {categorias.map(cat => (
                    <button
                        key={cat.slug}
                        className={`tabla-tab ${filtro === cat.slug ? "tabla-tab--active" : ""}`}
                        onClick={() => cambiarFiltro(cat.slug)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <table className="tabla-paquetes">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PAQUETE</th>
                        <th>CATEGORÍA</th>
                        <th>ITEMS INCLUIDOS</th>
                        <th>ACTIVO</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {paquetesPagina.map(paquete => (
                        <tr key={paquete.id}>
                            <td>#{String(paquete.id).padStart(3, "0")}</td>
                            <td>
                                <p className="tp-nombre">{paquete.nombre}</p>
                                <p className="tp-desc">{paquete.descripcion}</p>
                            </td>
                            <td>
                                <span className="tp-badge">{paquete.categoria.nombre}</span>
                            </td>
                            <td>{paquete.incluye.length} items</td>
                            <td>
                                <button
                                    className={`tp-switch ${paquete.activo ? "tp-switch--on" : ""}`}
                                    onClick={() => handleToggleActivo(paquete)}
                                >
                                    <span className="tp-switch-circle"></span>
                                </button>
                            </td>
                            <td>
                                <div className="tp-acciones">
                                    <i className="bi bi-pencil" onClick={() => onEditar(paquete)}></i>
                                    <i className="bi bi-trash tp-icon-delete" onClick={() => onEliminar(paquete)}></i>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {totalPaginas > 1 && (
                <nav aria-label="Paginación de paquetes" className="tp-paginacion-nav">
                    <ul className="pagination tp-pagination">
                        <li className={`page-item ${pagina === 1 ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => irPagina(pagina - 1)} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>

                        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(num => (
                            <li key={num} className={`page-item ${pagina === num ? "active" : ""}`}>
                                <button className="page-link" onClick={() => irPagina(num)}>
                                    {num}
                                </button>
                            </li>
                        ))}

                        <li className={`page-item ${pagina === totalPaginas ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => irPagina(pagina + 1)} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            )}

        </div>
    )
}