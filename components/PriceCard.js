import styles from "../styles/PriceCard.module.css";
import Image from "next/image";

const PriceCard = ({ prestation }) => {
    console.log(prestation.fields);
    // Object destructuring
    const { titre, description, prix, photo } = prestation.fields;
    return (
        <div className={styles.card}>
            <h2 className={styles.titre}>{titre}</h2>
            <div className={styles.image}>
                <Image src={"https:" + photo.fields.file.url} width={450} height={300} objectFit={"cover"} alt="" />
            </div>
            <div className={styles.description}>
                <p className={styles.text}>{description}</p>
                <p className={styles.text}>{prix}</p>
            </div>
            <div></div>
        </div>
    );
};

export default PriceCard;
