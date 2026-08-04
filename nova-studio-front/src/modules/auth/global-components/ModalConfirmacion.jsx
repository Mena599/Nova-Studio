export default function ModalConfirmacion({ titulo, mensaje, onCancelar, onConfirmar }) {
    return (
        <div className="modal-overlay">
            <div className="modal-confirmacion">
                <p className="mc-label">CONFIRMAR ELIMINACIÓN</p>
                <h3>{titulo}</h3>
                <p className="mc-mensaje">{mensaje}</p>

                <div className="mc-botones">
                    <button className="modal-cancelar" onClick={onCancelar}>
                        CANCELAR
                    </button>
                    <button className="mc-eliminar" onClick={onConfirmar}>
                        <i className="bi bi-trash"></i>
                        SÍ, ELIMINAR
                    </button>
                </div>
            </div>
        </div>
    )
}