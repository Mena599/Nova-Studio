import "../../../../css/contacto/Header.css"

export default function Header() {
    return (
        <main>
            <div className="header-si">
                <div className="header-si-inner">
                    <div className="parte-izq">
                        <p className="sub-titulo" data-aos="fade-right" data-aos-duration="800">
                            Hablemoss
                        </p>
                        <h1 className="titulo" data-aos="fade-right" data-aos-duration="800" data-aos-delay="150">
                            Estamos  aqui <br />
                            para ti.
                        </h1>
                        <p className="texto" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                            Contactanos
                        </p>
                    </div>
                    <div className="parte-der">
                        <p className="pregubta" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                            ¿Tienes dudas, quieres <br />
                            conocer más sobre nuestros <br />
                            servicios?
                        </p>
                        <p className="texto2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
                            Escríbenos, llámanos o encuéntranos <br />
                            en redes. Respondemos rápido.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}