import "./App.css";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Nav from "./components/Nav/Nav";

import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Nav/Nav";
import Causas from "./components/Nav/Nav";
import Crear_causa from "./components/Nav/Nav";
import Acerca_de from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="Inicio" element={<Inicio />} />
        <Route path="Causas" element={<Causas />} />
        <Route path="Crear causa" element={<Crear_causa />} />
        <Route path="Acerca de" element={<Acerca_de />} />
      </Routes>

      <Formulario />
      <Footer />
    </>
  );
}

export default App;
