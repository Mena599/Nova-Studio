import { useEffect, useState } from "react";
import CardPaquetes from "./componets/CardPaquetes";
import Header from "./componets/Header";
import PaqueteController from "./controller/PaqueteController";
import ServicioRedes from "./componets/ServicioRedes";
import ServicioUgc from "./componets/ServicioUgc";
import ServicioBranding from "./componets/ServicioBranding";

export default function Servicios() {
    const [paquetes, setPaquetes] = useState([])
    useEffect(() => {
        cargarPaquetes()
    }, [])

    const cargarPaquetes = async () => {
        const data = await PaqueteController.findALL()
        const activos = data
            .filter(p => p.activo)
            .sort((a, b) => a.ordenAparicion - b.ordenAparicion)
        setPaquetes(activos)
    }

    return (
        <main>
            <Header />
            <ServicioRedes lista={paquetes.filter(p => p.categoria.slug === "redes")} />
            <ServicioUgc lista={paquetes.filter(p => p.categoria.slug === "ugc")} />
            <ServicioBranding lista={paquetes.filter(p => p.categoria.slug === "branding")} />
        </main>
    )
}