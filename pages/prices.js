import { createClient } from "contentful";
import PriceCard from "../components/PriceCard";

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
    console.log(prestations);
    return (
        <div>
            <h1>Tarifs & Préstations</h1>
            {prestations.map((prestation) => (
                <PriceCard key={prestation.sys.id} prestation={prestation} />
            ))}
        </div>
    );
};

export default Prices;
