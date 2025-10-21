import { useState } from "react";
import axios from "axios";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Las contraseñas no coinciden ❌");
      return;
    }
console.log(username,email,password);
    try {
      const res = await axios.post("https://apoyar-backend.onrender.com/users/postUser", {
        username,
        email,
        password,
      });
      console.log(res.data)
      alert(res.data.message || "Cuenta creada exitosamente ✅");
      window.location.href = "/Iniciosesion"; 
    } catch (err) {
      alert(err.response?.data?.error || "Error al registrarse ❌");
    }
  };

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Crear cuenta</h1>
      <p className={styles.tienescuenta}>
        ¿Ya tienes una cuenta?{" "}
        <a className={styles.enlace} href="/Iniciosesion">
          Inicia sesión
        </a>
      </p>

      <form onSubmit={handleRegister}>
        <div className={styles.contenedordatos}>
          <p className={styles.texto}>Nombre de usuario</p>
          <input
            className={styles.formularios}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

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

        <div className={styles.contenedordatos}>
          <p className={styles.texto}>Confirmar contraseña</p>
          <input
            className={styles.formularios}
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <div className={styles.contenedorboton}>
          <button type="submit" className={styles.boton}>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
