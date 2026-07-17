import "../../../../css/nosotroscss/CasoCard.css"

export default function CasoExito(
    {
        variante,
        CasoNumero,
        titulo,
        logro,
        nombreNegocio,
        nececidades,
        textoNececidad,
        textogrid,
        estadisticas,
        logros,
        textologros
    }
) {
    return (
        <div className={`casos-exito-card ${variante}`}>
            <div className="caso-seccion-header">
                <p className="caso-numero">{CasoNumero}</p>
                <h1 className="caso-titulo">{titulo}</h1>
                <p className="caso-logro">{logro}</p>
            </div>

            <div className="caso-seccion-negocio">
                <h2 className="caso-negocio">{nombreNegocio}</h2>
                <p className="caso-necesidad">{nececidades}</p>
                <p className="caso-descripcion">{textoNececidad}</p>
            </div>

            <div className="stat-grid">
                <p>{textogrid}</p>
            </div>

            <div className="caso-seccion-estadisticas">
                {estadisticas.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <p className="stat-valor">{stat.valor}</p>
                        <p className="stat-etiqueta">{stat.etiqueta}</p>
                    </div>
                ))}
            </div>

            <div className="caso-seccion-logros">
                <h4 className="caso-logros">{logros}</h4>
                <p className="caso-texto">{textologros}</p>
            </div>
        </div>
    )
}