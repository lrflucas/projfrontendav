import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={({isActive}) => isActive ? styles.active : styles.navLink}>Home</NavLink>
            <NavLink to="/carros" className={({isActive}) => isActive ? styles.active : styles.navLink}>Carros</NavLink>
            <NavLink to="/novo" className={({isActive}) => isActive ? styles.active : styles.navLink}>Cadastrar</NavLink>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? styles.active : styles.navLink}>Dashboard</NavLink>
        </nav>
    );
};

export default Navbar;