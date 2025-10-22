import { useState } from "react";
import axios from "axios";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [profilePic, setProfilePic] = useState(null); // <- nueva

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Las contraseñas no coinciden ❌");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      if (profilePic) formData.append("image", profilePic); 

      const res = await axios.post(
        "https://apoyar-backend.onrender.com/auth/postUser",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      
      localStorage.setItem("user", JSON.stringify(res.data.user));

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

        {/* NUEVO INPUT DE FOTO */}
        <div className={styles.contenedordatos}>
          <p className={styles.texto}>Foto de perfil (opcional)</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePic(e.target.files[0])}
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
