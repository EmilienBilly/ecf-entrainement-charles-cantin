import { createClient } from "contentful";
import styles from "../styles/Gallery.module.css";
import Image from "next/image";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({ content_type: "photoGallery" });

    return {
        props: {
            photos: res.items,
        },
    };
}

const Gallery = ({ photos }) => {
    console.log(photos);
    return (
        <div className={styles.container}>
            <h1>Gallerie</h1>
            <div className={styles.grid}>
                {photos.map((photo) => (
                    <Image key={photo.sys.id} src={"https:" + photo.fields.image.fields.file.url} width={350} height={200} objectFit={"cover"} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
