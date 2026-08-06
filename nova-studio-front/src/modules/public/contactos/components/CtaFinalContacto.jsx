import { Link } from "react-router-dom"
import "../../../../css/contacto/CtaFinalContacto.css"
import osoGlobo from "../../../../imagenes/oso.png"

export default function CtaFinalContacto() {
    return (
        <section className="cta-contacto">
            <div className="cta-contacto-inner">

                <div className="cta-contacto-izq">
                    <p className="cta-contacto-label" data-aos="fade-right" data-aos-duration="800">
                        Te ayudamos con esto
                    </p>
                    <h2 className="cta-contacto-titulo" data-aos="fade-right" data-aos-duration="800" data-aos-delay="150">
                        Listo para dar <br />
                        el siguiente <br />
                        paso?
                    </h2>
                    <p className="cta-contacto-sub" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                        Agenda y te <br />
                        orientamos
                    </p>
                </div>
                <div className="der">
                    <Link
                        to="/agendar"
                        className="cta-contacto-boton"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="400"
                    >
                        <i className="bi bi-calendar-event"></i>
                        Agenda ahora
                    </Link>

                    <img
                        src={osoGlobo}
                        alt="Oso"
                        className="cta-contacto-img"
                        data-aos="fade" data-aos-duration="1200" data-aos-delay="600"
                    />
                </div>

            </div>
        </section>
    )
}