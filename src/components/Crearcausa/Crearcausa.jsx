import { useState } from "react";
import axios from "axios";
import styles from "./Crearcausa.module.css";

const Crearcausa = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState([]);
  //const [objetivo, setObjetivo] = useState("");
  const [alias, setAlias] = useState("");
  const [archivo, setArchivo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", titulo);
      formData.append("description", descripcion);
      formData.append("categories", JSON.stringify(categoria));
      formData.append("images", archivo);
      formData.append("infoTransf", alias);

      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://apoyar-backend.onrender.com/petitions/postPetition",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message || "Recaudación creada ✅");

      setTitulo("");
      setDescripcion("");
      setCategoria("");
      //setObjetivo("");
      setAlias("");
      setArchivo(null);
    } catch (err) {
      alert(err.response?.data?.message || "Error al crear recaudación ❌");
    }
  };

  const handleCategory = (e) => {
    setCategoria([e.target.value]);
    console.log(categoria);
  }

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
          onChange={(e) => setTitulo(e.target.value)}
        />

        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Descripción detallada</p>
        </div>
        <textarea
          className={styles.descripcion}
          placeholder="Explica por qué necesitas ayuda, cómo se usarán los fondos, etc."
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Categoría</p>
        </div>
        <select
          className={styles.inputs}
          value={categoria}
          onChange={handleCategory}
        >
          <option value="">Selecciona una categoría</option>
          <option value="Salud">Salud</option>
          <option value="Educacion">Educación</option>
          <option value="Animales">Animales</option>
          <option value="Otros">Otros</option>
        </select>

        {/* <div className={styles.contenedortexto}>
          <p className={styles.texto}>Objetivo de fondos (ARS)</p>
        </div>
        <input className={styles.inputs} type="number" placeholder="$ 50000" /> */}

        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Alias de Mercado Pago</p>
        </div>
        <input
          onChange={(e) => setAlias(e.target.value)}
          className={styles.inputs}
          type="text"
          placeholder="tu.alias.mp"
        />

        <div className={styles.contenedortexto}>
          <p className={styles.texto}>Subir fotos y videos</p>
        </div>
        <div className={styles.subirArchivo}>
          <p>Sube un archivo o arrástralo aquí</p>
          <p>PNG, JPG, GIF hasta 5MB</p>
          <input type="file" onChange={(e) => setArchivo(e.target.files[0])} />
        </div>

        <button onClick={handleSubmit} className={styles.boton}>
          Crear recaudación
        </button>
      </div>
    </div>
  );
};

export default Crearcausa;
