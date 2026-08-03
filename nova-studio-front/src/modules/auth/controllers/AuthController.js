const AuthController = {}
const URL = 'http://localhost:8080/api/nova/auth'
z
AuthController.login = async (usuario, password) => {
    const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password })
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data
}

export default AuthController