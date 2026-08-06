import { Link } from "react-router-dom"
import "../../../../css/homecss/Dudascss.css"

export default function DudasSeccion() {
    return (
        <div className="dudas row m-0 w-100">
            <div className=" izq col-md-6 col-12">
                <div className="contenido-dudas">
                    <p>TIENES DUDAS?</p>
                    <div className="titulo-boton-dudas">
                        <div className="hero-titulo">
                            <h1>NOSOTROS <br />
                                TE AYUDAMOS <br />
                                <span className="texto-gris">CON TU</span> <br />
                                <span className="texto-gris">NEGOCIO</span>
                            </h1>
                        </div>
                        <Link to="/agendar">
                            <button className="btn-primary-nova2">
                                <i className="bi bi-calendar me-2"></i>
                                Cotizar ahora
                            </button>
                        </Link>
                    </div>
                    <img src="src/imagenes/perro.png" className="dudas-perro" alt="perro"
                        data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" />
                    <img src="src/imagenes/cereza.png" className="dudas-cereza" alt="cereza"
                        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" />
                    <img src="src/imagenes/labios.png" className="dudas-labios" alt=""
                        data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600" />
                </div>
            </div>
            <div className=" dere-dudas col-md-6 col-12">
                <div className="dudas-item">
                    <h4 className="dudas-titulo">Sin Compromisos</h4>
                    <p className="dudas-texto">
                        Reunioes sin costo, Conoces lo paquetes y <br />
                        decides con tanquilidad paa cotisar
                    </p>
                </div>

                <div className="dudas-item">
                    <h4 className="dudas-titulo">Resultados medibles</h4>
                    <p className="dudas-texto">
                        Cada estrategia teine metricas claras. <br />
                        sabes exactamenteque estas obteniendo.
                    </p>
                </div>

                <div className="dudas-item">
                    <h4 className="dudas-titulo">Atencion Personalizada</h4>
                    <p className="dudas-texto">
                        No somos una agencia masiva. Tu negocio <br />
                        recibe atencion real y estrategia a medida
                    </p>
                </div>

            </div>

        </div>
    )
}