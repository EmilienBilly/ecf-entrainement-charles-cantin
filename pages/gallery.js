import { createClient } from "contentful";
import styles from "../styles/Gallery.module.css";
import Image from "next/image";
import { useEffect } from "react";
import Filter from "../components/Filter";

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
    // photos = photos.sort(() => Math.random() - 0.5);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Galerie</h1>
            <div className={styles.grid}>
                {photos.map((photo) => (
                    <div className={photo.fields.orientation == "landscape" ? styles.short : styles.tall} key={photo.sys.id}>
                        <Image src={"https:" + photo.fields.image.fields.file.url} layout="fill" objectFit="cover" alt="" />
                    </div>
                ))}
            </div>
            <Filter photo={photos} />
        </div>
    );
};

export default Gallery;
