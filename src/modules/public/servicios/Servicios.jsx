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

    const cargarPaquetes = async () => setPaquetes(
        await PaqueteController.findALL()
    )

    return (
        <main>
            <Header />
            <ServicioRedes lista={paquetes.filter(p => p.categoria === "redes")} />
            <ServicioUgc lista={paquetes.filter(p => p.categoria === "ugc")} />
            <ServicioBranding lista={paquetes.filter(p => p.categoria === "branding")} />
        </main>
    )
}