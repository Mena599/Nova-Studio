import "../../../../css/nosotroscss/Minicasos.css"
import MiniCaso from "./Minicaso"

export default function MiniCasos() {
    return (
        <main>
            <section className="multiples-clientes">
                <div className="multiples-clientes-inner">
                    <h2 className="multiples-clientes-titulo" data-aos="fade-up" data-aos-duration="800">
                        Caso 03 - Múltiples clientes
                    </h2>
                    <div className="multiples-clientes-grid">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                            <MiniCaso
                                variante="clara"
                                numero="APERTURA DE NEGOCIO"
                                titulo="JAUS COFFEE"
                                estadisticas={[
                                    { valor: "42.7mil", etiqueta: "Viasualizaciones" },
                                    { valor: "+80%", etiqueta: "Incremento en ventas" },
                                ]}
                                texto="Organizamos un evento de apertura como estrategia de lanzamiento. El evento fue un éxito y lograron incrementar sus ventas en un 80 % desde su primer mes."
                            />
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                            <MiniCaso
                                variante="oscura"
                                numero="APERTURA DE NEGOCIO"
                                titulo="Bendito Sun Club"
                                estadisticas={[
                                    { valor: "19.8mil", etiqueta: "Alcanse Organico" },
                                ]}
                                texto="Video promocional para evento en Teques. Alcance 100 % orgánico, posicionando a Bendito Sun Club como un destino de entretenimiento en la región."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}