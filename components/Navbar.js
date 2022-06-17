import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <a>
                    <img src="/facebook-icon.svg" className={styles.socialMediaIcon} alt="" />
                </a>
                <a>
                    <img src="/instagram-icon.svg" className={styles.socialMediaIcon} alt="" />
                </a>
            </div>
            <ul className={styles.navMenu}>
                <li className={styles.navItem}>
                    <a className={styles.navLink}>GALERIE</a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink}>TARIFS & PRÉSATIONS</a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink}>CONTACT</a>
                </li>
            </ul>
            <div className={styles.hamburger}>
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
            </div>
        </nav>
    );
};

export default Navbar;
