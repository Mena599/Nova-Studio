export default function RedSocialCard({ icon, color, plataforma, usuario, texto, url }) {
    return (
        <div className="red-card">
            <div className="red-card-header">
                <i className={`bi ${icon}`} style={{ color: color }}></i>
                <div>
                    <p className="red-card-plataforma">{plataforma}</p>
                    <p className="red-card-usuario">{usuario}</p>
                </div>
            </div>
            <p className="red-card-texto">{texto}</p>

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="red-card-boton"
            >
                SEGUIR <i className="bi bi-plus"></i>
            </a>
        </div>
    )
}