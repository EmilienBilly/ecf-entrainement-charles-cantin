import { createClient } from "contentful";
import styles from "../styles/Gallery.module.css";
import Image from "next/image";
import { useState } from "react";
import Filter from "../components/Filter";
import { AnimatePresence, motion } from "framer-motion";

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
    // Initialising pics state with props.photos value
    const [pics, setPics] = useState(photos);
    console.log(pics);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Galerie</h1>
            <motion.div layout className={styles.grid}>
                <AnimatePresence>
                    {pics.map((pics) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, duration: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ ease: "easeOut", duration: 0.3 }}
                            layout
                            className={pics.fields.orientation == "landscape" ? styles.short : styles.tall}
                            key={pics.sys.id}>
                            <Image src={"https:" + pics.fields.image.fields.file.url} layout="fill" objectFit="cover" alt="" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            {/* Filter component which receive photos and filterPics as props */}
            <Filter photos={photos} filterPics={(pics) => setPics(pics)} />
        </div>
    );
};

export default Gallery;
