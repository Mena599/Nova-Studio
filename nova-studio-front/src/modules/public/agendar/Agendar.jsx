import { useState } from "react"
import "../../../css/agendarcss/Agendar.css"
import AgendarInfo from "./componets/AgendarInfo"
import AgendarForm from "./componets/AgendarForm"
import AgendarDespues from "./componets/AgendarDespues"
import AgendarExito from "./componets/AgendarExito"

export default function Agendar() {
    const [exito, setExito] = useState(false)

    if (exito) {
        return (
            <main className="agendar-page">
                <div className="agendar-inner">
                    <AgendarExito />
                </div>
            </main>
        )
    }

    return (
        <main className="agendar-page">
            <div className="agendar-inner">
                <div className="agendar-card">
                    <AgendarInfo />
                    <AgendarForm onExito={() => setExito(true)} />
                </div>
                <AgendarDespues />
            </div>
        </main>
    )
}