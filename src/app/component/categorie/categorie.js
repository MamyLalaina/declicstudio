import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";

const Categorie = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    /// data test 
    const data = [
        {
            "id" : 1,
            "name" : "T-shirt",
            "image": "T-Shirt-Mock-Up-2-full.jpg",
        },
        {
            "id" : 2,
            "name" : "Sweatshirt",
            "image": "sweat.avif",
        },
        {
            "id" : 3,
            "name" : "Casquette",
            "image": "4dd03c4b-e2db-4d25-a50a-c0d04c480cbc_800x800.webp",
        }
    ]
    /// data test fin


    return (
        <motion.div
            className="categorie-section"
            variants={container}
            initial="hidden"
            // animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}

        >
            {
                data.map((items, index) => 
                    
                        <motion.div key={index} transition={{ duration: 1 }} variants={item} className="one-categorie">
                            <Image
                                width={1000}
                                height={1000}
                                src={`/product/${items.image}`}
                                alt="image-collenction"
                                className="image-collenction"
                            />
                            <div className="text-categorie">
                                <div>
                                    <p>SALES</p>
                                    <h2> { items.name } </h2>
                                </div>
                            </div>
                        </motion.div>
                    
                )
            }
        </motion.div>
    )
}

export default Categorie;