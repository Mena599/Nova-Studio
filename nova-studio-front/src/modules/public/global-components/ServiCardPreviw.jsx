import { Link } from "react-router-dom";

export default function ServiCardPreviw({ numero, titulo, subtitulo, items, color }) {
    return (
        <div className="col-md-4 col-12 mb-4">
            <div className={`service-card service-card-${color}`}>
                <p className="service-numero">{numero}</p>

                <h3 className="service-titulo">{titulo}</h3>

                <p className="service-subtitulo">{subtitulo}</p>

                <hr className="line-service" />

                <ul className="service-lista">
                    {items.map((item, index) => (
                        <li key={index}>{item}  </li>
                    ))}
                </ul>
                <Link to="/servicios">
                    <button className="service-boton">ver mas...</button>
                </Link>

            </div>
        </div>
    )
}