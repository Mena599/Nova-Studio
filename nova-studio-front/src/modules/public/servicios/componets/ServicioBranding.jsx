import "../../../../css/servicios/CardBranding.css"
import CardPaquetes from "./CardPaquetes";
import CardBrandingIntro from "./CardBrandingIntro";
import perroGlobo from "../../../../imagenes/perro2.png"
import camara from "../../../../imagenes/camarita.png"
import perroGloboRojo from "../../../../imagenes/perro.png"

export default function ServicioBranding({ lista }) {
    return (
        <section className="servicio-branding">
            <div className="header-branding-inner">


                <p className="categoria">01- Categoria</p>
                <h1>Branding</h1>
            </div>

            <div className="grid-paquetes grid-paquetes-branding">
                <CardBrandingIntro
                    titulo="Branding"
                    texto="Paquete Ideal Para Marcas Que Quieren Destacar, Conectar Con Su Público Y Dejar Huella Desde El Primer Vistazo. Creamos Identidad, Estilo Y Presencia. No Solo Diseñamos Tu Marca, La Volvemos Inolvidable Y Todos Tus Planes Personalizados"
                    imgTop={camara}
                    imgBottom={perroGloboRojo}
                />

                {lista.map((paquete, index) => (
                    <CardPaquetes
                        key={paquete.id}
                        item={paquete}
                        variante={index % 2 === 0 ? "roja" : "clara"}
                    />
                ))}
            </div>
        </section>
    )
}