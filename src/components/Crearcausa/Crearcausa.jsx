import styles from "./Crearcausa.module.css";

const Crearcausa = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedortop}>
        <h1 className={styles.titulo}>Crear una recaudación</h1>
        <p className={styles.subtitulo}>
          Completa los siguientes campos para iniciar tu causa.
        </p>
      </div>

      <div className={styles.campos}>
        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Título de la causa</p>
        </div>
        <input
          className={styles.inputs}
          type="text"
          placeholder="Ej: Ayuda para tratamiento médico"
        />

        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Descripción detallada</p>
        </div>
        <textarea
          className={styles.descripcion}
          placeholder="Explica por qué necesitas ayuda, cómo se usarán los fondos, etc."
        />

        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Categoría</p>
        </div>
        <select className={styles.inputs}>
          <option value="">Selecciona una categoría</option>
          <option value="salud">Salud</option>
          <option value="educacion">Educación</option>
          <option value="animales">Animales</option>
          <option value="otros">Otros</option>
        </select>

        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Objetivo de fondos (ARS)</p>
        </div>
        <input className={styles.inputs} type="number" placeholder="$ 50000" />

        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Alias de Mercado Pago</p>
        </div>
        <input className={styles.inputs} type="text" placeholder="tu.alias.mp" />

        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Subir fotos y videos</p>
        </div>
        <div className={styles.subirArchivo}>
          <p>Sube un archivo o arrástralo aquí</p>
          <p>PNG, JPG, GIF hasta 10MB</p>
        </div>

        <button className={styles.boton}>Crear recaudación</button>
      </div>
    </div>
  );
};

export default Crearcausa;
