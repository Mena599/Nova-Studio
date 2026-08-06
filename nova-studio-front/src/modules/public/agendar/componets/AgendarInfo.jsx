export default function AgendarInfo() {
    return (
        <div className="agendar-izq">
            <p className="agendar-label">Agenda tu reunión</p>
            <h1>Hablemos de<br />tu negocio</h1>
            <p className="agendar-sub">Sin compromisos</p>
            <p className="agendar-texto">
                La reunión es sin ningún costo. Conoces nuestros paquetes,
                resolvemos tus dudas y decides con total tranquilidad.
            </p>

            <div className="agendar-pasos">
                <div className="agendar-paso">
                    <span>01</span>
                    <div>
                        <p className="paso-titulo">Llena el formulario</p>
                        <p className="paso-texto">Comparte tus datos y elige la fecha y hora que más te convenga.</p>
                    </div>
                </div>
                <div className="agendar-paso">
                    <span>02</span>
                    <div>
                        <p className="paso-titulo">Recibe la confirmación</p>
                        <p className="paso-texto">Te llegará un correo con el enlace de Google Meet y los detalles.</p>
                    </div>
                </div>
                <div className="agendar-paso">
                    <span>03</span>
                    <div>
                        <p className="paso-titulo">Reunión por Google Meet</p>
                        <p className="paso-texto">30 minutos. Te presentamos todo y encontramos la solución real.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}