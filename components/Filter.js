import styles from "../styles/Filter.module.css";

const Filter = ({ photos }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.filter}>
                    <button className={styles.btn}>Mariage</button>
                    <button className={styles.btn}>Grossesse</button>
                    <button className={styles.btn}>Couple</button>
                    <button className={styles.btn}>Famille</button>
                    <button className={styles.btn}>Bébé</button>
                    <button className={styles.btn}>Baptême</button>
                </div>
            </div>
        </>
    );
};

export default Filter;
