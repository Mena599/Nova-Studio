const CategoriaController = {}
const URL = 'http://localhost:8080/api/nova/categorias'

CategoriaController.findAll = async () => {
    const response = await fetch(URL, {
        method: 'GET',
        headers: { "Accept": "application/json" }
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data.data
}

export default CategoriaController