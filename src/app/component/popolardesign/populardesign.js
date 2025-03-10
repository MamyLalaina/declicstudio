import Image from "next/image";
import React from "react";


const PopularDesign = ({ motion, ...props }) => {

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }


    }

    const children = {
        hidden: { x: 25, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    }


    /// exemple data

    const data = [
        "4809936-vector-hand-drawn-linear-art-woman-face-continuous-line-fashion-concept-feminine-beauty-minimalist-print-illustration-for-t-shirt-design-logo-for-cosmetics-etc-vectoriel.jpg",
        "st,small,845x845-pad,1000x1000,f8f8f8.jpg",
        "Typography_quote_hand-drawn_elements_black_and_white_t_top_right.jpg",
        "never-give-up-typography-design-vector-print-t-shirt_639170-755.avif",
        "images.jpeg",
        "st,small,845x845-pad,1000x1000,f8f8f8.jpg"
    ]

    /// exemple data fin


    return (
        <motion.div 
            className="image-far"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
        >

            {
                data.map((item, index) => {
                    return (
                        <motion.div 
                            key={index} 
                            className="on-item-image"
                            variants={children}
                            transition={{duration: 0.5}}
                        >
                            <Image className="image"
                                width="200"
                                height="200"
                                src={`/other/${item}`}
                                alt="one image"
                            />
                        </motion.div>
                    )
                })
            }





        </motion.div>
    )
}

export default PopularDesign