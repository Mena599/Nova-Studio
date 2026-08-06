import { Link } from "react-router-dom"
import "../../../../css/homecss/Hero.css"

export default function Hero() {
    return (
        <main>
            <div className="padre row m-0 w-100">
                {/* COLUMNA IZQUIERDA (HERO RED) */}
                <div className="hero-izq col-md-6 col-12">
                    <div className="hero-contenido">
                        <div className="hero-titulo-contenedor">
                            <h1 className="hero-titulo" data-aos="fade-right" data-aos-duration="1000">
                                Hacemos <br />
                                <span className="texto-gris">crecer tu</span> <br />
                                negocio en el <br />
                                mundo <span className="texto-gris">digital</span>
                            </h1>
                        </div>
                        <p className="hero-parrafo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            Estrategias de marketing <br />
                            personalizadas para conectar tu <br />
                            negocio con las personas <br />
                            correctas.
                            Agenda una cita y conoce <br />
                            cómo podemos ayudarte.
                        </p>
                        <div className="hero-botones" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                            <Link to="/agendar">
                                <button className="btn-primary-nova">
                                    <i className="bi bi-calendar me-2"></i>
                                    Cotizar ahora
                                </button>
                            </Link>

                            <Link to="/servicios">
                                <button className="btn-secondary-nova">
                                    Ver paquetes
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA (CONTENIDO BLANCO) */}
                <div className="hero-der col-md-6 col-12">
                    {/* Imagen superior: Cámara Leica */}
                    <div className="camara-wrapper" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="400">
                        <img src="src/imagenes/camarita.png" alt="Leica M6" className="img-decorativa camara" />
                    </div>

                    <div className="derecha-contenido">
                        <p className="subtitulo-digital" data-aos="fade-left" data-aos-duration="1000">
                            POSICIONA TU <br />
                            MARCA EN LA ERA <br />
                            DIGITAL
                        </p>

                        {/* Tarjeta Roja Flotante */}
                        <div className="tarjeta-disponibilidad" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                            <p className="tarjeta-tag">Próxima disponibilidad</p>
                            <h2 className="tarjeta-titulo">Agenda Hoy</h2>
                            <hr className="tarjeta-linea" />
                            <ul className="tarjeta-lista">
                                <li>Consultoría inicial</li>
                                <li>Presentación de paquetes</li>
                                <li>Google meet 30 min - 1h</li>
                            </ul>
                        </div>

                        {/* Imágenes inferiores */}
                        <img src="src/imagenes/cereza.png" alt="Cerezas" className="img-decorativa cerezas"
                            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" />
                        <img src="src/imagenes/oso.png" alt="Oso plateado" className="img-decorativa oso"
                            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" />
                    </div>
                </div>

                <div className="marquee-contenedor">
                    <div className="marquee-contenido">
                        <span className="marquee-item">Estrategias de Marketing </span>
                        <span className="marquee-punto">●</span>
                        <span className="marquee-item">Gestión de Proyectos</span>
                        <span className="marquee-punto">●</span>
                        <span className="marquee-item">Redes Sociales</span>
                        <span className="marquee-punto">●</span>
                        <span className="marquee-item">Creadores UGC</span>
                        <span className="marquee-punto">●</span>
                        <span className="marquee-item">Estrategias de Marketing</span>
                        <span className="marquee-punto">●</span>
                        <span className="marquee-item">Gestión de Proyectos</span>
                        <span className="marquee-punto">●</span>
                        <span className="marquee-item">Redes Sociales</span>
                        <span className="marquee-item">Creadores UGC</span>
                        <span className="marquee-punto">●</span>
                    </div>
                </div>
            </div>
        </main>
    )
}