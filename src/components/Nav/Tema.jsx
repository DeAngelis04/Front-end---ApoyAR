
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styles from "./Nav.module.css";

const Darkmode = ({ theme, toggleTheme }) => {
  return (
    <div className={styles.contenedortema}>
    <button className={styles.tema} onClick={toggleTheme}>
      {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </button></div>
  );
};

export default Darkmode;