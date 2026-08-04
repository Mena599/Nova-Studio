export default function Toast({ titulo, mensaje, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="toast-caja">
                <p className="toast-label">CAMBIOS GUARDADOS</p>
                <h3>{titulo}</h3>
                <p className="toast-mensaje">{mensaje}</p>
                <button className="toast-boton" onClick={onClose}>
                    <i className="bi bi-check-lg"></i>
                    ENTENDIDO
                </button>
            </div>
        </div>
    )
}