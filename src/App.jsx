import "./App.css";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Causas from "./components/Causas/Causas";
import CrearCausa from "./components/CrearCausa/CrearCausa";
import AcercaDe from "./components/AcercaDe/AcercaDe";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/causas" element={<Causas />} />
        <Route path="/crear-causa" element={<CrearCausa />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/Formulario" element={<Formulario />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
