import styles from "../styles/Filter.module.css";
import { useState } from "react";
import loadCustomRoutes from "next/dist/lib/load-custom-routes";

// Filter component using props (destructured) passed in the gallery.js page
const Filter = ({ photos, filterPics }) => {
    // Creating variables stocking a filtered array of photos
    const babyCategory = photos.filter((photo) => photo.fields.category == "bebe");
    const coupleCategory = photos.filter((photo) => photo.fields.category == "couple");
    const mariageCategory = photos.filter((photo) => photo.fields.category == "mariage");
    const pregnancyCategory = photos.filter((photo) => photo.fields.category == "grossesse");
    const familyCategory = photos.filter((photo) => photo.fields.category == "famille");
    const baptismCategory = photos.filter((photo) => photo.fields.category == "bapteme");

    const [isOpen, setIsOpen] = useState(0);
    const handleClick = (value) => {
        setIsOpen(value);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.filter}>
                    <div>
                        <button
                            className={styles.btn}
                            onClick={() => {
                                filterPics(photos);
                                handleClick(0);
                            }}>
                            <span className={isOpen == 0 ? styles.clicked : ""}>Tout</span>
                        </button>
                    </div>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            filterPics(mariageCategory);
                            handleClick(1);
                        }}>
                        <span className={isOpen == 1 ? styles.clicked : ""}>Mariage</span>
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            filterPics(pregnancyCategory);
                            handleClick(2);
                        }}>
                        <span className={isOpen == 2 ? styles.clicked : ""}>Grossesse</span>
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            filterPics(coupleCategory);
                            handleClick(3);
                        }}>
                        <span className={isOpen == 3 ? styles.clicked : ""}>Couple</span>
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            filterPics(familyCategory);
                            handleClick(4);
                        }}>
                        <span className={isOpen == 4 ? styles.clicked : ""}>Famille</span>
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            filterPics(babyCategory);
                            handleClick(5);
                        }}>
                        <span className={isOpen == 5 ? styles.clicked : ""}>Bébé</span>
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            filterPics(baptismCategory);
                            handleClick(6);
                        }}>
                        <span className={isOpen == 6 ? styles.clicked : ""}>Baptême</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Filter;
