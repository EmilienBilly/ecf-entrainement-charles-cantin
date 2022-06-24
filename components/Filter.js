import styles from "../styles/Filter.module.css";
import { useState } from "react";
import loadCustomRoutes from "next/dist/lib/load-custom-routes";

// Filter component using props (destructured) passed in the gallery.js page
const Filter = ({ photos, filterPics }) => {
    const babyCategory = photos.filter((photo) => photo.fields.category == "bebe");
    const coupleCategory = photos.filter((photo) => photo.fields.category == "couple");
    const mariageCategory = photos.filter((photo) => photo.fields.category == "mariage");
    const pregnancyCategory = photos.filter((photo) => photo.fields.category == "grossesse");
    const familyCategory = photos.filter((photo) => photo.fields.category == "famille");
    const baptismCategory = photos.filter((photo) => photo.fields.category == "bapteme");

    return (
        <>
            <div className={styles.container}>
                <div className={styles.filter}>
                    <div>
                        <button className={styles.btn} onClick={() => filterPics(photos)}>
                            Tout
                        </button>
                    </div>
                    <button className={styles.btn} onClick={() => filterPics(mariageCategory)}>
                        Mariage
                    </button>
                    <button className={styles.btn} onClick={() => filterPics(pregnancyCategory)}>
                        Grossesse
                    </button>
                    <button className={styles.btn} onClick={() => filterPics(coupleCategory)}>
                        Couple
                    </button>
                    <button className={styles.btn} onClick={() => filterPics(familyCategory)}>
                        Famille
                    </button>
                    <button className={styles.btn} onClick={() => filterPics(babyCategory)}>
                        Bébé
                    </button>
                    <button className={styles.btn} onClick={() => filterPics(baptismCategory)}>
                        Baptême
                    </button>
                </div>
            </div>
        </>
    );
};

export default Filter;
