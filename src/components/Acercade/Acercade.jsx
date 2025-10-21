import { useState } from "react";
import styles from "./Acercade.module.css";
import {
  FaHeart,
  FaBullseye,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";

const Acercade = () => {
  const [activo, setActivo] = useState(null);

  const togglePregunta = (index) => {
    setActivo(activo === index ? null : index);
  };

  const preguntas = [
    {
      q: "¿Cómo funciona la plataforma?",
      a: "Nuestra plataforma conecta a personas que necesitan ayuda con donantes, de forma segura y transparente.",
    },
    {
      q: "¿Es seguro donar a través de Mercado Pago?",
      a: "Sí. Todas las donaciones se procesan mediante la pasarela oficial de Mercado Pago, garantizando seguridad y privacidad.",
    },
    {
      q: "¿Cómo puedo crear mi propia causa?",
      a: "Simplemente registrate, completá el formulario de creación de causa y comenzá a compartir tu historia.",
    },
    {
      q: "¿Se cobra alguna comisión?",
      a: "No cobramos comisión por usar la plataforma. Solo aplican las tarifas estándar de Mercado Pago.",
    },
  ];

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Acerca de Nosotros</h1>

      <div className={styles.bloque}>
        <div className={styles.icono}>
          <FaHeart />
        </div>
        <div>
          <h2 className={styles.subtitulo}>Nuestra Misión</h2>
          <p className={styles.texto}>
            Nuestra misión es conectar a personas que necesitan ayuda con
            quienes quieren ayudar en Argentina, facilitando la donación directa
            y transparente.
          </p>
        </div>
      </div>

      <div className={styles.bloque}>
        <div className={styles.icono}>
          <FaBullseye />
        </div>
        <div>
          <h2 className={styles.subtitulo}>Impacto y Visión</h2>
          <p className={styles.texto}>
            Facilitamos la ayuda directa y transparente a través de nuestra
            plataforma, con la visión de construir una comunidad solidaria y
            fuerte en todo el país.
          </p>
        </div>
      </div>

      <div className={styles.seccion}>
        <h3 className={styles.tituloseccion}>Preguntas Frecuentes</h3>

        <div className={styles.acordeon}>
          {preguntas.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                activo === index ? styles.activo : ""
              }`}
              onClick={() => togglePregunta(index)}
            >
              <div className={styles.pregunta}>
                <span>{item.q}</span>
                <FaChevronDown
                  className={`${styles.iconoflecha} ${
                    activo === index ? styles.girar : ""
                  }`}
                />
              </div>
              {activo === index && <p className={styles.respuesta}>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.redes}>
        <h3>Síguenos en Redes</h3>
        <div className={styles.iconosredes}>
       <a className={styles.enlaces}
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook />
    </a>
    <a className={styles.enlaces}
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
    <a className={styles.enlaces}
      href="https://twitter.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter />
    </a>
        </div>
      </div>

      <div className={styles.contacto}>
        <h3>Contacto</h3>
        <p>
          ¿Preguntas? Escribinos a{" "}
          <a  href="mailto:contacto@ayudarargentina.org">
            contacto@ayudarargentina.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default Acercade;
