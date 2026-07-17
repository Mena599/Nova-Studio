import HeroNos from "./nosotroscomp/HeroNos";
import Separador from "./nosotroscomp/Separador";
import CasoExito from "./nosotroscomp/CasoExito";
import Anahana from "./nosotroscomp/Anahana";
import HeltyVives from "./nosotroscomp/HeltyVives";
import MiniCaso from "./nosotroscomp/Minicaso";
import MiniCasos from "./nosotroscomp/MiniCasos";
import CtaFinal from "./nosotroscomp/CtaFinal";
import "../../../css/nosotroscss/Hero.css"
export default function Nosotros() {
    return (
        <main>
            {/*Heroo De Nosotros cawn */}
            <HeroNos />
            <Separador
                tituloPrincipal={<>MIRA <br /> NUESTROS</>}
                tituloResaltado={<>Casos  de éxito</>}
                textos={<>Nuestros casos de <br />
                    éxito te darán esa <br />
                    confianza que buscas.</>}
            />
            <Anahana />
            <HeltyVives />
            <Separador
                tituloPrincipal={<>MIRA <br /> NUESTROS</>}
                tituloResaltado={<>Casos  de éxito</>}
                textos={<>Nuestros casos de <br />
                    éxito te darán esa <br />
                    confianza que buscas.</>}
            />

            <MiniCasos />
            <CtaFinal />

        </main>
    )
}