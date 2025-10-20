import styles from "./Crearcausa.module.css";
const Crearcausa = () => {
  return (
    <>
      <div className={styles.contenedor}>
        <div className={styles.contenedortop}>
          <h1 className={styles.titulo}>Crear recaudación</h1>
          <p className={styles.subtitulo}>
            Completa los siguientes campos para iniciar tu causa
          </p>
        </div>
        <div className={styles.campos}>
          <div className={styles.contenedortexto}><p className={styles.texto}>Titulo de la causa</p></div>
          <input className={styles.inputs} type="text" />
          <div className={styles.contenedortexto}><p className={styles.texto}>Descripción detallada</p></div>
          <input className={styles.descripcion} type="text" />
          <div className={styles.contenedortexto}><p className={styles.texto}>Categoria</p></div>
          <input className={styles.inputs} type="text" />
          <div className={styles.contenedortexto}><p className={styles.texto}>Alias de Mercado Pago</p></div>
          <input className={styles.inputs} type="text" />
          <div className={styles.contenedortexto}><p className={styles.texto}>Subir fotos y videos</p></div>
          <button className={styles.boton}>Crear recaudación</button>
        </div>
      </div>
    </>
  );
};

export default Crearcausa;
