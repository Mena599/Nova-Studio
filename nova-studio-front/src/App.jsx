import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthRouter from "./router/AuthRouter"
import PublicRouter from "./router/PublicRouter"
import Login from "./modules/auth/Login"

export default function App() {
    const [session, setSession] = useState(false)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("nova_token")
        setSession(!!token)
        setCargando(false)
    }, [])

    if (cargando) return null

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={session ? <AuthRouter /> : <PublicRouter />} />
        </Routes>
    )
}