import "../../../../css/homecss/ServiciosHomeCss.css"
import ServiCardPreviw from "../../global-components/ServiCardPreviw"
import "../../../../css/homecss/Servicecardpreview.css"

export default function ServiciosHome() {
    return (
        <div className="servicios-sec">

            <div className="container">
                {/* CÁMARA envuelta en wrapper para la animación */}
                <div className="servicios-camara-wrapper" data-aos="fade-down" data-aos-duration="1000">
                    <img src="src\imagenes\camarita.png" className="servicios-camara" alt="camara" />
                </div>

                <div className="servicios-header row">
                    <div className="col-md-6">
                        <p className="servicios-tag" data-aos="fade-right" data-aos-duration="800">
                            LO QUE HACEMOS
                        </p>
                        <h2 className="servicios-titulo" data-aos="fade-right" data-aos-duration="800" data-aos-delay="150">
                            Servicios para <br />
                            tu crecimiento
                        </h2>
                        <p className="servicios-subtitulo" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                            MÁS PROFESIONAL, MÁS <br />
                            RESULTADOS
                        </p>
                    </div>
                    <div className="col-md-6"></div>
                </div>

                {/* ANIMACIÓN en el ROW completo, sin romper el grid */}
                <div className="row" data-aos="fade-up" data-aos-duration="1000">
                    <ServiCardPreviw
                        numero="01"
                        titulo="Redes Sociales"
                        subtitulo="Gestión de cuentas"
                        items={[
                            "Diseño de feed y estructura de cuenta",
                            "Levantamiento de contenido",
                            "Asesorías de marketing",
                            "Edición y publicación"
                        ]}
                        color="claro"
                    />

                    <ServiCardPreviw
                        numero="02"
                        titulo="Redes Sociales"
                        subtitulo="Creadores UGC"
                        items={[
                            "Equipo de creadores seleccionados",
                            "Dirección creativa personalizada",
                            "Contenido + campaña Ads",
                            "Gestión completa de redes"
                        ]}
                        color="oscuro"
                    />

                    <ServiCardPreviw
                        numero="03"
                        titulo="Branding"
                        subtitulo="Identidad de marca"
                        items={[
                            "Concepto y personalización de marca",
                            "Logo + variaciones",
                            "Paleta, tipografía y elementos gráficos",
                            "Manual de marca"
                        ]}
                        color="rojo"
                    />
                </div>
            </div>
        </div>
    )
}