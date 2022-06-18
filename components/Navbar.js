import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const hamburgerClassName = isOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger;
    const navMenuClassName = isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu;
    const navbarClassName = isOpen ? `${styles.navbar} ${styles.active}` : styles.navbar;

    return (
        <nav className={navbarClassName}>
            <div>
                <a>
                    <img src="/facebook-icon.svg" className={styles.socialMediaIcon} alt="" />
                </a>
                <a>
                    <img src="/instagram-icon.svg" className={styles.socialMediaIcon} alt="" />
                </a>
            </div>
            <ul className={navMenuClassName}>
                <li className={styles.navItem}>
                    <Link href="/gallery">
                        <a className={styles.navLink} onClick={handleClick}>
                            GALERIE
                        </a>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} onClick={handleClick}>
                        TARIFS & PRÉSATIONS
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} onClick={handleClick}>
                        CONTACT
                    </a>
                </li>
                <li className={styles.navItem}>
                    <Link href="/">
                        <a className={styles.navLink} onClick={handleClick}>
                            ACCUEIL
                        </a>
                    </Link>
                </li>
            </ul>
            <div className={hamburgerClassName} onClick={handleClick}>
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
            </div>
        </nav>
    );
};

export default Navbar;
