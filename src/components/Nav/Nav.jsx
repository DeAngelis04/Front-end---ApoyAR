import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import logo from "../../assets/LOGO.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Darkmode from "./Tema";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null); 

  useEffect(() => {
    //const storedUser = JSON.parse(localStorage.getItem("user"));
    //if (storedUser) setUser(storedUser);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" className={styles.logo} />

    
      {user?.profilePic && (
        <img
          src={user.profilePic} 
          alt="perfil"
          className={styles.profilePic}
        />
      )}

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
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Iniciosesion">Iniciar sesión</Link>
        </li>
        <li>
          <Link to="/causas">Causas</Link>
        </li>
        <li>
          <Link to="/crear-causa">Crear causa</Link>
        </li>
        <li>
          <Link to="/acerca-de">Acerca de</Link>
        </li>
        <li>
          <Link to="/Formulario">Crear Cuenta</Link>
        </li>
        <Darkmode theme={theme} toggleTheme={toggleTheme} />
      </ul>
      <Outlet />
    </nav>
  );
};

export default Nav;
