import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetalleCausa.module.css";

const DetalleCausa = () => {
  const { id } = useParams();
  const [causa, setCausa] = useState(null);

  useEffect(() => {
    const fetchCausa = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `https://apoyar-backend.onrender.com/petitions/getPetitionById/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        if (data.success) setCausa(data.data);
      } catch (error) {
        console.error("Error al obtener causa:", error);
      }
    };

    fetchCausa();
  }, [id]);

  const handleCopiarAlias = () => {
    if (causa?.infoTransf) {
      navigator.clipboard.writeText(causa.infoTransf);
      alert("Alias copiado al portapapeles ✅");
    }
  };

  if (!causa) return <p>Cargando...</p>;

  return (
    <div className={styles.detalle}>
      <h2 className={styles.titulo}>{causa.title}</h2>
      <p className={styles.descripcion}>{causa.description}</p>

      {causa.media?.[0]?.url && (
        <div className={styles.imagen}>
          <img src={causa.media[0].url} alt={causa.title} />
        </div>
      )}

      <div className={styles.donacion}>
        <p className={styles.monto}> {causa.goalAmount?.toLocaleString()}</p>
        <button onClick={handleCopiarAlias} className={styles.boton}>
          Donar
        </button>
        
      </div>
    </div>
  );
};

export default DetalleCausa;
