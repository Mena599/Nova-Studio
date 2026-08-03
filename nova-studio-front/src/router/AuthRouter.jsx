import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../modules/auth/Login"
import Dashboard from "../modules/auth/dashboard/Dashboard"
import PrivateRoute from "./PrivateRouter"


export default function AuthRouter() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />

            {/* cualquier ruta /admin/* desconocida redirige al login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}