import "../../../../css/servicios/Header.css"
import cereza from "../../../../imagenes/cereza.png"
import perro from "../../../../imagenes/perro2.png"

export default function Header() {
    return (
        <main>
            <section className="header-servicios">
                <div className="header-servicios-inner">

                    <div className="h-izq">
                        <p className="texto1">LO QUE OFRECEMOS</p>
                        <h1 className="h-titulo">NUESTROS <br /> SERVICIOS</h1>
                        <p className="h-texto2">POSICIONA TU MARCA <br /> EN LA ERA DIGITAL</p>
                    </div>

                    <div className="h-der">
                        <p className="h-info">
                            Elige el paquete que mejor <br />
                            se adapte a tu negocio, <br />
                            agenda tu cita y te lo <br />
                            explicamos todo.
                        </p>
                    </div>

                    <img src={cereza} className="header-img header-img-cereza" alt="cereza" />
                    <img src={perro} className="header-img header-img-perro" alt="perro de globo" />

                </div>
            </section>
        </main>
    )
}