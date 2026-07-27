import CardPaquetes from "./CardPaquetes";
import gotas from "../../../../imagenes/gotas.png"
import "../../../../css/servicios/ServiciosUgc.css"

export default function ServicioUgc({ lista }) {
    return (
        <section className="servicio-ugc">
            <div className="header-ugc-inner">
                <div className="izq-ugc">
                    <p className="categoria">02-Categoria</p>
                    <h1>Paquetes con <span>creadores UGC</span></h1>
                </div>

                <img src={gotas} className="imagen-gotas" alt="gotas metálicas" />
            </div>

            <div className="grid-paquetes">
                {lista.map((paquete, index) => (
                    <CardPaquetes
                        key={paquete.id}
                        item={paquete}
                        variante={index % 2 === 0 ? "roja" : "clara"}
                    />
                ))}
            </div>
        </section>
    )
}