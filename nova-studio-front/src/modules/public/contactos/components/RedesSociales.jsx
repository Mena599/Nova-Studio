import "../../../../css/contacto/RedesSociales.css"
import RedSocialCard from "./RedSocialCard"
import arana from "../../../../imagenes/arana.png"
import labios from "../../../../imagenes/labios.png"
import globos from "../../../../imagenes/perro2.png"

const contactInfo = [
    {
        icon: "bi-phone",
        tipo: "Teléfono",
        texto: "+52 777-908-5902",
        detalle: "Respondemos en menos de 24 horas",
    },
    {
        icon: "bi-envelope",
        tipo: "Correo Electrónico",
        texto: "novateam333@gmail.com",
        detalle: "Lunes a Viernes ~ 9am - 6pm",
    },
    {
        icon: "bi-geo-alt",
        tipo: "Ubicación",
        texto: "Cuernavaca, Morelos",
        detalle: "México. Atención presencial con cita previa",
    },
    {
        icon: "bi-calendar",
        tipo: "Reuniones Virtuales",
        texto: "Google Meet",
        detalle: "Agenda tu cita y te la mandamos por correo",
    },
]

const redes = [
    {
        icon: "bi-instagram",
        color: "#E1306C",
        plataforma: "Instagram",
        usuario: "@novaStudio.23",
        texto: "Contenido editorial, casos de éxito, tips de marketing y el detrás de cámaras de Nova Studio.",
        url: "https://www.instagram.com/novastudio.23/",
    },
    {
        icon: "bi-tiktok",
        color: "#141414",
        plataforma: "Tik Tok",
        usuario: "@novaStudio.23",
        texto: "Videos virales, estrategias que funcionan y resultados reales de nuestros clientes en acción.",
        url: "https://www.tiktok.com/@novastudio.23",
    },
    {
        icon: "bi-facebook",
        color: "#1877F2",
        plataforma: "Facebook",
        usuario: "@novaStudio.23",
        texto: "Actualizaciones, promociones y comunidad. Conéctate con Nova Studio y ponte al día.",
        url: "https://www.facebook.com/novastudio.23",
    },
]

export default function RedesSociales() {
    return (
        <main>
            <section className="redes">

                <div className="redes-inner">
                    <img src={labios} alt="" className="redes-img redes-img-labios"
                        data-aos="fade" data-aos-duration="1200" data-aos-delay="400" />
                    <img src={globos} alt="" className="redes-img redes-img-globos"
                        data-aos="fade" data-aos-duration="1200" data-aos-delay="600" />
                    <img src={arana} alt="" className="redes-img redes-img-arana"
                        data-aos="fade" data-aos-duration="1200" data-aos-delay="800" />

                    <div className="parte-izq">
                        <h2 className="redes-titulo" data-aos="fade-right" data-aos-duration="800">
                            Contáctanos
                        </h2>

                        <div className="redes-parte">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="redes-item"
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    data-aos-delay={150 + index * 150}
                                >
                                    <div className="redes-icon">
                                        <i className={`bi ${item.icon}`}></i>
                                    </div>
                                    <div className="redes-info">
                                        <p className="tipo">{item.tipo}</p>
                                        <p className="texto">{item.texto}</p>
                                        <p className="detalle">{item.detalle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="redes-divisor" data-aos="fade" data-aos-duration="1000"></div>

                    <div className="parte-der">
                        <div className="titulo-der">
                            <h2 className="redes-titulo" data-aos="fade-left" data-aos-duration="800">
                                ¿Encuéntranos en
                            </h2>
                            <p className="redes-titulo-p" data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
                                redes sociales?
                            </p>
                        </div>

                        <div className="redes-links">
                            {redes.map((red, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay={300 + index * 200}
                                >
                                    <RedSocialCard {...red} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}