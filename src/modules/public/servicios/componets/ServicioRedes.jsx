import "../../../../css/servicios/ServicioRedes.css"
import CardPaquetes from "./CardPaquetes";

export default function ServicioRedes({ lista }) {
    return (
        <section className="servicio-redes">

            <div className="header-redes">
                <div className="isq">
                    <p className="categoria">01-Categoria</p>
                    <h1>Redes <span>Sociales</span></h1>
                </div>
                <div className="der">
                    <p>
                        Tu presencia en redes no es opcional, es tu carta de <br />
                        presentación. En Nova Studio gestionamos tus perfiles <br />
                        de forma estratégica, creamos contenido que conecta con tu <br />
                        audiencia y Trabajamos con estrategia hibrida. Tú enfócate en <br />
                        tu negocio, nosotros nos encargamos de que te vean.
                    </p>
                </div>

            </div>

            <div className="grid-paquetes">
                {lista.map((paquete, index) => (
                    <CardPaquetes
                        key={paquete.id}
                        item={paquete}
                        variante={index % 2 === 0 ? "clara" : "roja"}
                    />
                ))}
            </div>
        </section>
    )
}