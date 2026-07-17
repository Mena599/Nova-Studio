import "../../../../css/nosotroscss/Cosa.css"

export default function Separador({ tituloPrincipal, tituloResaltado, textos }) {
    return (
        <div className="cosa">
            <div className="cosa-inner">
                <div className="cosa-izq">
                    <div className="cosa-titulo-contenedor">
                        <h2 className="cosa-titulo">{tituloPrincipal}</h2>
                        <span className="cosa-eso">{tituloResaltado}</span>
                    </div>
                </div>
                <div className="cosa-der">
                    <p className="cosa-texto">{textos}</p>
                </div>
            </div>
        </div>
    )
}