import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

AOS.init({
  once: true,          // la animación pasa solo una vez
  duration: 1000,
  offset: 120,         // cuántos px antes de que aparezca se activa
  easing: 'ease-out',
  mirror: false
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)