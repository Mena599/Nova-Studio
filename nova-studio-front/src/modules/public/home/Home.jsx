import "../../../css/homecss/HomeCss.css";

import Hero from "./homecomp/Hero";
import ServiciosHome from "./homecomp/ServiciosHome";
import DudasSeccion from "./homecomp/DudasSeccion";

export default function Home() {
    return (
        <main>
            <Hero />
            <ServiciosHome />
            <DudasSeccion />
        </main>
    );
}