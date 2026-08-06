import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../modules/public/home/Home"
import Servicios from "../modules/public/servicios/Servicios";
import Nosotros from "../modules/public/nosotros/Nosotros.jsx";
import Error404 from "../errors/Error404"
import NavBar from "../modules/public/global-components/NavBar"
import Footer from "../modules/public/global-components/Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Contacto from "../modules/public/contactos/Contacto.jsx";
import Agendar from "../modules/public/agendar/Agendar.jsx";

export default function PublicRouter() {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <div style={{ paddingTop: "50px" }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/agendar" element={<Agendar />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}