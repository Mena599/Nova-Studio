const CitaController = {}
const URL = 'http://localhost:8080/api/nova/citas'

CitaController.getDisponibilidad = async (fecha) => {
    const response = await fetch(`${URL}/disponibilidad?fecha=${fecha}`, {
        method: 'GET',
        headers: { "Accept": "application/json" }
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data.data
}

CitaController.agendar = async (cita) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cita)
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data
}

export default CitaController