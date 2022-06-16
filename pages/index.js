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
            {/* Changing the html background-color defined in globals.css by a background-image */}
            <style jsx global>{`
                html {
                    background-image: url("/home-pic.jpg");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    min-height: 100vh;
                }

                @media only screen and (max-width: 768px) {
                    html {
                        background-image: url("/home-pic-small-screen.jpg");
                        background-position: center;
                    }
                }
            `}</style>
        </div>
    );
}
