import { useState } from "react"
import "../../../../css/servicios/CardPaquetes.css"

export default function CardPaquetes({ item, variante }) {

    const [paquete, setPaquete] = useState(item || {
        id: 0,
        nombre: "Nombre_paquete",
        descripcion: "Lo que inclutye el paquete",
        incluye: [

        ],
        categoria: "Sin categoria",
        activo: false
    })

    return (
        <main>
            <div className={`Car-principal Car-principal--${variante}`}>

                <p className="car-numero">{paquete.id}</p>

                <h3 className="car-titulo">{paquete.nombre}</h3>
                <p className="car-subtitulo">{paquete.descripcion}</p>

                <ul className="car-lista">
                    {
                        paquete.incluye.map((beneficio, index) => (
                            <li key={index}>{beneficio}</li>
                        ))
                    }
                </ul>

                <button className="car-boton">Cotiza ahora</button>

            </div>
        </main>
    )
}