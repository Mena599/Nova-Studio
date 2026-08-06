import { useState, useEffect } from "react"
import MiniCalendario from "../componets/MiniCalendario"
import PaqueteController from "../../servicios/controller/PaqueteController"
import CitaController from "../controllers/CitaController"
import { useSearchParams } from "react-router-dom"

export default function AgendarForm({ onExito }) {

    const [searchParams] = useSearchParams()
    const idPaqueteDesdeURL = searchParams.get("paquete")

    const [paquetes, setPaquetes] = useState([])
    const [horariosDisponibles, setHorariosDisponibles] = useState([])
    const [cargandoHorarios, setCargandoHorarios] = useState(false)
    const [calendarioAbierto, setCalendarioAbierto] = useState(false)

    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        nombreNegocio: "",
        idPaquete: idPaqueteDesdeURL || "",
        fecha: "",
        hora: "",
        mensaje: ""
    })

    const [error, setError] = useState(null)
    const [enviando, setEnviando] = useState(false)

    useEffect(() => {
        PaqueteController.findALL()
            .then(data => setPaquetes(data.filter(p => p.activo)))
            .catch(console.log)
    }, [])

    useEffect(() => {
        if (!form.fecha) {
            setHorariosDisponibles([])
            return
        }

        setCargandoHorarios(true)
        setForm(prev => ({ ...prev, hora: "" }))

        CitaController.getDisponibilidad(form.fecha)
            .then(setHorariosDisponibles)
            .catch(err => {
                setHorariosDisponibles([])
                setError(err.message)
            })
            .finally(() => setCargandoHorarios(false))
    }, [form.fecha])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setEnviando(true)

        try {
            const citaDto = {
                nombre: form.nombre,
                correo: form.correo,
                telefono: form.telefono,
                nombreNegocio: form.nombreNegocio,
                idPaquete: form.idPaquete ? Number(form.idPaquete) : null,
                fecha: form.fecha,
                hora: form.hora,
                mensaje: form.mensaje
            }

            await CitaController.agendar(citaDto)
            onExito()
        } catch (err) {
            setError(err.message)
        } finally {
            setEnviando(false)
        }
    }

    return (
        <div className="agendar-der">
            <p className="agendar-form-label">Formulario de cita</p>
            <h2>Cuéntanos sobre<br />ti.</h2>

            <form onSubmit={handleSubmit}>
                <div className="agendar-row">
                    <div className="agendar-campo">
                        <label>Escribe Tu Nombre</label>
                        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
                    </div>
                    <div className="agendar-campo">
                        <label>Escribe Tu Correo</label>
                        <input type="email" name="correo" value={form.correo} onChange={handleChange} placeholder="Ejemplo@gmail.com" required />
                    </div>
                </div>

                <div className="agendar-row">
                    <div className="agendar-campo">
                        <label>Teléfono</label>
                        <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" required />
                    </div>
                    <div className="agendar-campo">
                        <label>Nombre De Negocio</label>
                        <input name="nombreNegocio" value={form.nombreNegocio} onChange={handleChange} placeholder="Nombre de tu negocio" />
                    </div>
                </div>

                <div className="agendar-row">
                    <div className="agendar-campo">
                        <label>Servicio De Interés</label>
                        <select name="idPaquete" value={form.idPaquete} onChange={handleChange}>
                            <option value="">Selecciona</option>
                            {paquetes.map(p => (
                                <option key={p.id} value={p.id}>{p.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="agendar-campo agendar-campo-fecha">
                        <label>Fecha Preferida</label>
                        <input
                            type="text"
                            readOnly
                            value={form.fecha ? form.fecha.split("-").reverse().join("/") : ""}
                            placeholder="dd/mm/aaaa"
                            onClick={() => setCalendarioAbierto(true)}
                        />
                        {calendarioAbierto && (
                            <MiniCalendario
                                onSelect={(fecha) => setForm(prev => ({ ...prev, fecha }))}
                                onClose={() => setCalendarioAbierto(false)}
                            />
                        )}
                    </div>
                </div>

                <div className="agendar-campo">
                    <label>Hora Preferida</label>
                    <select name="hora" value={form.hora} onChange={handleChange} required disabled={!form.fecha || cargandoHorarios}>
                        <option value="">
                            {!form.fecha ? "Primero elige una fecha" : cargandoHorarios ? "Cargando..." : "Selecciona un horario"}
                        </option>
                        {horariosDisponibles.map(h => (
                            <option key={h} value={h}>{h}</option>
                        ))}
                    </select>
                    {form.fecha && !cargandoHorarios && horariosDisponibles.length === 0 && (
                        <p className="agendar-sin-horarios">No hay horarios disponibles ese día, elige otra fecha.</p>
                    )}
                </div>

                <div className="agendar-campo">
                    <label>Cuéntanos sobre ti</label>
                    <textarea
                        name="mensaje"
                        rows={4}
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder="¿Qué hace tu negocio? ¿Qué quieres lograr? Mientras más nos cuentes, más podemos ayudarte..."
                    />
                </div>

                {error && <p className="agendar-error">{error}</p>}

                <button type="submit" className="agendar-boton" disabled={enviando}>
                    {enviando ? "Enviando..." : "Enviar Formulario"}
                </button>
            </form>
        </div>
    )
}