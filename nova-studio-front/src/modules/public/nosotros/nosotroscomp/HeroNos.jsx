import "../../../../css/nosotroscss/Hero.css"
export default function HeroNos() {
    return (
        <section className="hero-nosotros">
            <div className="row m-0 w-100">

                {/* COLUMNA IZQUIERDA - título, texto, iconos */}
                <div className="col-md-6">
                    <div className="quienes-contenido">
                        <h1 className="quienes-titulo" data-aos="fade-right" data-aos-duration="1000">
                            ¿QUIENES <br />
                            SOMOS?
                        </h1>

                        <div className="texto-iconos-wrapper">
                            <p className="quienes-texto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                Somos Nova studio, una agenacia
                                apasionada por transformar ideas
                                en realidades exitosas. somos
                                estrategas en marketing y proyectos,
                                con un enfoque único que combinan
                                creatividad análisis y ejecución impeclable
                            </p>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA - imágenes decorativas */}
                <div className="col-md-6 columna-imagenes">
                    {/* Cámara envuelta en wrapper para conservar la rotación */}
                    <div className="quienes-camara-wrapper" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">
                        <img src="src/imagenes/camarita.png" className="quienes-camara" alt="camara" />
                    </div>

                    {/* Iconos */}
                    <div className="quienes-iconos">
                        <div className="iconos-fila">
                            <div className="icono-item" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
                                <i className="bi bi-eye"></i>
                                <span>+ vistas</span>
                            </div>
                            <div className="icono-item" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600">
                                <i className="bi bi-lock"></i>
                                <span>+ Seguro</span>
                            </div>
                        </div>
                        <div className="iconos-fila iconos-fila-centrada">
                            <div className="icono-item" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="800">
                                <i className="bi bi-graph-up-arrow"></i>
                                <span>+ Resultados</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Imágenes de abajo (perro, labios) */}
            <img src="src/imagenes/perro.png" className="quienes-perro" alt="perro"
                data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" />
            <img src="src/imagenes/labios.png" className="quienes-labios" alt="labios"
                data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" />
        </section>
    )
}