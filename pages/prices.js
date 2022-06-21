import { createClient } from "contentful";
import PriceCard from "../components/PriceCard";
import styles from "../styles/Prices.module.css";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({ content_type: "prestations" });

    return {
        props: {
            prestations: res.items,
        },
    };
}

const Prices = ({ prestations }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tarifs & Préstations</h1>
            <div className={styles.grid}>
                {prestations.map((prestation) => (
                    <PriceCard key={prestation.sys.id} prestation={prestation} />
                ))}
            </div>
        </div>
    );
};

export default Prices;
