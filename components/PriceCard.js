import styles from "../styles/PriceCard.module.css";
import Image from "next/image";

const PriceCard = ({ prestation }) => {
    console.log(prestation);
    const { titre, description, prix, photo } = prestation.fields;
    return (
        <div className={styles.card}>
            <h2 className={styles.titre}>{titre}</h2>
            <div>
                <Image className={styles.image} src={"https:" + photo.fields.file.url} width={350} height={200} objectFit={"cover"} alt="" />
            </div>
            <div className={styles.description}>
                <p>{description}</p>
                <p>{prix}</p>
            </div>
            <div></div>
        </div>
    );
};

export default PriceCard;
