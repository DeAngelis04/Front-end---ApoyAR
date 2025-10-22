import styles from "./NotFound.module.css";
const Notfound = () => {
  return (
    <>
    <div className={styles.contenedor}>
    <h1 className={styles.titulo}> Pagina no encontrada</h1>
   <p className={styles.texto}>Tal parece que la pagina que buscas no existe o fue eliminada</p>
   <a className={styles.enlace} href="/">Tocame para volver al inicio</a></div>
    </>
  );
}

export default Notfound;
