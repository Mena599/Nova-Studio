import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

export default function PublicLayout() {
    return (
        <>
            <NavBar />
            <div style={{ paddingTop: "50px" }}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}