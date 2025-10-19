import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import logo from "../../assets/LOGO.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Darkmode from "./Tema";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.className = theme; // agrega la clase al body
  }, [theme]);

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" className={styles.logo} />
      

      <div className={styles.contenedorboton}>
        <button
          className={styles.menuBtn}
          onClick={() => setOpen(!open)}
          onMouseDown={(e) => e.preventDefault()}
        >
          {open ? (
            <CloseIcon className={styles.menuIcon} />
          ) : (
            <MenuIcon className={styles.menuIcon} />
          )}
        </button>
      </div>

      
      <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Causas</a></li>
        <li><a href="#">Crear causa</a></li>
        <li><a href="#">Acerca de</a></li>
        <Darkmode theme={theme} toggleTheme={toggleTheme} />
      </ul>
    </nav>
  );
};

export default Nav;
