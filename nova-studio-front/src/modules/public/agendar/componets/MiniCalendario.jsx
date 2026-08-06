import { useState } from "react"
import "../../../../css/agendarcss/MiniCalendario.css"

const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const DIAS = ["L", "M", "X", "J", "V", "S", "D"]

function formatearISO(date) {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    return `${y}-${m}-${d}`
}

export default function MiniCalendario({ onSelect, onClose }) {
    const hoy = new Date()
    hoy.setHours(0, 0, 0, 0)

    const [mesVisible, setMesVisible] = useState(new Date(hoy.getFullYear(), hoy.getMonth(), 1))

    const anio = mesVisible.getFullYear()
    const mes = mesVisible.getMonth()

    const primerDiaSemana = (new Date(anio, mes, 1).getDay() + 6) % 7 // 0 = Lunes
    const diasEnMes = new Date(anio, mes + 1, 0).getDate()

    const celdas = []
    for (let i = 0; i < primerDiaSemana; i++) celdas.push(null)
    for (let dia = 1; dia <= diasEnMes; dia++) celdas.push(dia)

    const esInvalido = (dia) => {
        const fecha = new Date(anio, mes, dia)
        const esFinDeSemana = fecha.getDay() === 0 || fecha.getDay() === 6
        const esPasado = fecha < hoy
        return esFinDeSemana || esPasado
    }

    const handleClickDia = (dia) => {
        if (esInvalido(dia)) return
        const fecha = new Date(anio, mes, dia)
        onSelect(formatearISO(fecha))
        onClose()
    }

    const irMesAnterior = () => setMesVisible(new Date(anio, mes - 1, 1))
    const irMesSiguiente = () => setMesVisible(new Date(anio, mes + 1, 1))

    return (
        <div className="minical-popover">
            <div className="minical-header">
                <button type="button" onClick={irMesAnterior}><i className="bi bi-chevron-left"></i></button>
                <p>{MESES[mes]} {anio}</p>
                <button type="button" onClick={irMesSiguiente}><i className="bi bi-chevron-right"></i></button>
            </div>

            <div className="minical-dias-semana">
                {DIAS.map(d => <span key={d}>{d}</span>)}
            </div>

            <div className="minical-grid">
                {celdas.map((dia, i) => {
                    if (dia === null) return <span key={i} className="minical-celda-vacia"></span>

                    const invalido = esInvalido(dia)
                    const esHoy = formatearISO(new Date(anio, mes, dia)) === formatearISO(hoy)

                    return (
                        <button
                            type="button"
                            key={i}
                            className={`minical-dia ${invalido ? "minical-dia--invalido" : ""} ${esHoy ? "minical-dia--hoy" : ""}`}
                            onClick={() => handleClickDia(dia)}
                            disabled={invalido}
                        >
                            {dia}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}