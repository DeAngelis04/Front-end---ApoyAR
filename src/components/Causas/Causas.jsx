import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import necesario
import styles from "./Causas.module.css";

const Causas = () => {
  const [causas, setCausas] = useState([]);
  const navigate = useNavigate(); // 👈 hook para redirección

  useEffect(() => {
    const fetchCausas = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("https://apoyar-backend.onrender.com/petitions/getAllPetitions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) setCausas(data.data);
      } catch (error) {
        console.error("Error al obtener causas:", error);
      }
    };

    fetchCausas();
  }, []);

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Peticiones</h2>

      <div className={styles.lista}>
        {causas.map((causa) => (
          <div
            key={causa.id}
            className={styles.card}
            onClick={() => navigate(`/causa/${causa.id}`)} // 👈 redirección al detalle
            style={{ cursor: "pointer" }} // opcional: da feedback visual
          >
            <div className={styles.imgContainer}>
              <img
                src={causa.media?.[0]?.url || "/images/placeholder.jpg"}
                alt={causa.title}
              />
            </div>
            <div className={styles.info}>
              <h3>{causa.title}</h3>
              <p>{causa.description}</p>

              <span className={styles.categoria}>
                {causa.categories?.[0]?.name || "Sin categoría"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Causas;
