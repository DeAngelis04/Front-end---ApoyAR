import "./App.css";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Causas from "./components/Causas/Causas";
import CrearCausa from "./components/CrearCausa/CrearCausa";
import AcercaDe from "./components/AcercaDe/AcercaDe";
import Iniciosesion from "./components/Iniciodesesion/Iniciosesion";
import Notfound from "./components/NotFound/Notfound";
import DetalleCausa from "./components/DetalleCausa/DetalleCausa"; 

function App() {
  const location = useLocation();

  const showLayout =
  location.pathname === "/" ||
  location.pathname === "/Iniciosesion" ||
  location.pathname === "/causas" ||
  location.pathname === "/crear-causa" ||
  location.pathname === "/acerca-de" ||
  location.pathname === "/Formulario" ||
  location.pathname.startsWith("/causa/"); // 👈 añade el detalle


  return (
    <>
      {showLayout && <Nav />}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Iniciosesion" element={<Iniciosesion />} />
        <Route path="/causas" element={<Causas />} />
        <Route path="/causa/:id" element={<DetalleCausa />} /> 
        <Route path="/crear-causa" element={<CrearCausa />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

export default App;
