import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles.titre}>
                <h1 className={styles.name}>CHARLES CANTIN</h1>
                <h1 className={styles.profession}>PHOTOGRAPHE</h1>
            </div>
        </div>
    );
}
