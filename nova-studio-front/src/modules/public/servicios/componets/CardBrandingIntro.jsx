export default function CardBrandingIntro({ titulo, texto, imgTop, imgBottom }) {
    return (
        <div className="card-branding-intro">
            <p className="cbi-paquete">Paquete 01</p>

            <img src={imgTop} className="cbi-img-top" alt="" />

            <h3 className="cbi-titulo">{titulo}</h3>
            <p className="cbi-texto">{texto}</p>

            <img src={imgBottom} className="cbi-img-bottom" alt="" />

            <button className="cbi-boton">Cotiza ahora</button>
        </div>
    )
}