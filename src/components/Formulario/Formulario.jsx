import styles from "./Formulario.module.css";

import Darkmode from "../Nav/Tema";
const Formulario = () => {

  return (
    

    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Crear cuenta</h1>
      <p className={styles.tienescuenta}>
        ¿Ya tienes una cuenta?{" "}
        <a className={styles.enlace} href="">
          {" "}
          Inicia sesión
        </a>

      </p>
      <div className={styles.contenedordatos}>
        <p className={styles.texto}>Nombre de usuario</p>
        <input className={styles.formularios}></input>
      </div>
      <div className={styles.contenedordatos}>
        <p className={styles.texto}>Correo Electronico</p>
        <input className={styles.formularios}></input>
      </div>
      <div className={styles.contenedordatos}>
        <p className={styles.texto}>Contraseña</p>
        <input className={styles.formularios} type="password"></input>
      </div>
      <div className={styles.contenedordatos}>
        <p className={styles.texto}>Confirmar contraseña</p>
        <input className={styles.formularios} type="password"></input>
      </div>
      <div className={styles.contenedorboton}><button className={styles.boton}>Registrarse</button></div>
    </div>
 
);
};
export default Formulario;
