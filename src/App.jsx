import "./App.css";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Nav from "./components/Nav/Nav";
import Darkmode from "./components/Nav/Tema";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="Inicio" element={<Inico/>} />
        </Routes>
      </div>
      </BrowserRouter>
      <Formulario />
      <Footer />
    </>
  );
}

export default App;
