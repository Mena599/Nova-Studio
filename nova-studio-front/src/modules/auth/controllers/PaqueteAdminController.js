// modules/auth/controller/PaqueteAdminController.js — NUEVO
const PaqueteAdminController = {}
const URL = 'http://localhost:8080/api/nova'

PaqueteAdminController.crear = async (paquete) => {
    const token = localStorage.getItem("nova_token")

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(paquete)
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
}

PaqueteAdminController.actualizar = async (id, paquete) => {
    const token = localStorage.getItem("nova_token")

    const response = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(paquete)
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
}

PaqueteAdminController.eliminar = async (id) => {
    const token = localStorage.getItem("nova_token")

    const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: { "Authorization": `Bearer ${token}` }
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
}

// también necesitas listar TODOS los paquetes (incluidos inactivos) para la tabla admin
PaqueteAdminController.findALL = async () => {
    const token = localStorage.getItem("nova_token")

    const response = await fetch(URL, {
        method: 'GET',
        headers: { "Authorization": `Bearer ${token}` }
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data.data
}

export default PaqueteAdminController