import CasoExito from "./CasoExito";
import "../../../../css/nosotroscss/Anahanacss.css"
export default function Anahana() {
    return (
        <main>
            <div className="caso-uno row">
                <div className="caso-izq" data-aos="fade-right" data-aos-duration="1000">
                    <CasoExito
                        CasoNumero="Caso 01 - Entretenimiento"
                        titulo="Caso de éxito"
                        logro="Lo que logramos"
                        nombreNegocio="Anahana Night Club"
                        nececidades="LA NECESIDAD"
                        textoNececidad="Llenar el antro y que la gente lo conozca"
                        textogrid="RESULTADOS OBTENIDOS"
                        estadisticas={[
                            {
                                valor: <><span className="num-blanco">+</span>
                                    <span className="num-acento">301.8%</span></>,
                                etiqueta: "Crecimiento de seguidores"
                            },
                            {
                                valor: <><span className="num-blanco">+84.6</span><span className="num-acento">mil</span></>,
                                etiqueta: "Visualizaciones"
                            },
                            {
                                valor: <><span className="num-blanco">947</span> <span className="num-acento">→</span> <span className="num-acento">3,537</span></>,
                                etiqueta: "Seguidores en 1 mes"
                            },
                            {
                                valor: <span className="num-blanco">+2,793</span>,
                                etiqueta: "Nuevos seguidores"
                            }
                        ]}
                        logros="Lo Que Logramos"
                        textologros="Llenamos el antro en menos de dos semanas con una estrategia de bombardeo.Anahana suena en todos lados y se mantiene lleno los fines de semana."
                    />
                </div>

                <div className="caso-der">
                    <p className="caso-der-texto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        No vendemos promesas. Aquí están los números reales
                        de negocios que confiaron en Nova Studio y transformaron
                        su presencia digital.
                    </p>
                    <img src="src/imagenes/Ahanana.png" className="imagen-Anahana" alt="Anahana"
                        data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" />
                </div>

            </div>
        </main>
    )
}