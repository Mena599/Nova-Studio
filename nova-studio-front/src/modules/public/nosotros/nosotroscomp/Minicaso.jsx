import "../../../../css/nosotroscss/MultiplesCss.css"

export default function MiniCaso({ numero, titulo, estadisticas, texto, variante = "clara" }) {
    return (
        <main className="mini-caso-wrapper">
            <div className={`mini-caso mini-caso--${variante}`}>
                <p className="mini-caso-numero">
                    {numero}
                </p>
                <h2 className="titulo">{titulo}</h2>
                <div className="mini-caso-estadisticas">
                    {estadisticas.map((stat, index) => (
                        <div key={index} className="stad-item">
                            <p className="stad-valor">{stat.valor}</p>
                            <p className="stad-etiqueta">{stat.etiqueta}</p>
                        </div>
                    ))}
                </div>
                <p className="texto">{texto}</p>
            </div>
        </main>
    )
}