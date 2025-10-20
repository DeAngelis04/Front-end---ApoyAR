import { useState } from "react";
import axios from "axios";
import styles from "./Iniciosesion.module.css";

const Iniciosesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email,password);
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      alert("Inicio de sesión exitoso ✅");
    } catch (err) {
      alert(err.response?.data?.error || "Error al iniciar sesión ❌");
    }
  };

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Iniciar sesión</h1>
      <p className={styles.tienescuenta}>
        ¿No tienes una cuenta?{" "}
        <a className={styles.enlace} href="/Formulario">
          Registrarse
        </a>
      </p>

      <form onSubmit={handleLogin}>
        <div className={styles.contenedordatos}>
          <p className={styles.texto}>Correo Electrónico</p>
          <input
            className={styles.formularios}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.contenedordatos}>
          <p className={styles.texto}>Contraseña</p>
          <input
            className={styles.formularios}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.contenedorboton}>
          <button type="submit" className={styles.boton}>
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Iniciosesion;
