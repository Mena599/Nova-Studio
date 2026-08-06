import { Link } from "react-router-dom"
import "../../../../css/nosotroscss/CtaFinal.css"

import labios from "../../../../imagenes/labios.png"

export default function CtaFinal() {
    return (
        <section className="cta-final">
            <div className="cta-final-inner">
                <div className="cta-final-texto">
                    <h2>¿Tu negocio Podría <br />Ser el siguinte caso?</h2>
                </div>


                <Link to="/agendar" className="cta-final-boton">
                    <i className="bi bi-calendar-event"></i>
                    AGENDAR AHORA POR GOOGLE MEET
                </Link>

                <img
                    src={labios}
                    alt="Labios"
                    className="cta-final-labios"
                />
            </div>
        </section>
    )
}