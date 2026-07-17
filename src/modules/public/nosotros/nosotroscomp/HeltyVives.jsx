import "../../../../css/nosotroscss/Heltycss.css"
import CasoExito from "./CasoExito"


export default function HeltyVives() {
    return (
        <main>
            <div className="caso-dos row">
                <div className="caso-izq-h">

                    <p className="caso-der-texto-h" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        No vendemos promesas. Aquí están los números reales
                        de negocios que confiaron en Nova Studio y transformaron
                        su presencia digital.
                    </p>
                    <img src="src/imagenes/Ahanana.png" className="imagen-Anahana-h" alt="Anahana"
                        data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" />
                </div>

                <div className="caso-der" data-aos="fade-left" data-aos-duration="1000">
                    <CasoExito
                        variante="card-clara"
                        CasoNumero="Caso 02 - Restaurante"
                        titulo="Caso de éxito"
                        logro="Lo que logramos"
                        nombreNegocio="Healthy Vibes"
                        nececidades="LA NECESIDAD"
                        textoNececidad="Abrió en noviembre. Necesitaban darse a conocer y crear una comunidad desde cero."
                        textogrid="RESULTADOS OBTENIDOS"
                        estadisticas={[
                            {
                                valor: <><span className="num-blanco">215</span><span className="num-acento">mil</span></>,
                                etiqueta: "Visualizaciones video 1"
                            },
                            {
                                valor: <><span className="num-blanco">206</span><span className="num-acento">mil</span></>,
                                etiqueta: "Visualizaciones video 2"
                            },
                            {
                                valor: <><span className="num-blanco">0</span> <span className="num-acento">→</span> <span className="num-blanco">9,180</span></>,
                                etiqueta: "Seguidores orgánicos"
                            },
                            {
                                valor: <><span className="num-blanco">16.5</span><span className="num-acento">mil</span></>,
                                etiqueta: "Vistas Adicionales"
                            }
                        ]}
                        logros="Lo Que Logramos"
                        textologros="Con una estrategia de bombardeo, logramos convertirla en la cafetería más viral de Cuernavaca. Creamos una comunidad y un restaurante exitoso."
                    />

                </div>

            </div>
        </main>
    )
}