import CardPaquetes from "./CardPaquetes";

export default function ServicioRedes({ lista }) {
    return (
        <section>
            <h2>Redes Sociales</h2>
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