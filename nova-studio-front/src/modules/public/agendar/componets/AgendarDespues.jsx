import "../../../../css/agendarcss/AgendarDespues.css"

export default function AgendarDespues() {
    return (
        <div className="agendar-despues">
            <div className="agendar-despues-icono">
                <i className="bi bi-envelope"></i>
            </div>
            <div className="agendar-despues-texto">
                <p className="agendar-despues-titulo">¿Qué pasará después de enviar?</p>
                <p className="agendar-despues-sub">
                    Recibirás un correo de confirmación con todos los detalles de tu cita
                </p>
            </div>

            <div className="agendar-despues-item">
                <i className="bi bi-camera-video"></i>
                <p>Enlace de<br />Google Meet</p>
            </div>

            <div className="agendar-despues-item">
                <i className="bi bi-calendar-check"></i>
                <p>Fecha y Hora<br />confirmada</p>
            </div>

            <div className="agendar-despues-item">
                <i className="bi bi-clock"></i>
                <p>Duración de<br />30 minutos</p>
            </div>
        </div>
    )
}