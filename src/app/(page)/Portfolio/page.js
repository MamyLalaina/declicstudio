'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "./data.json"
import { motion } from "framer-motion";

const Page = () => {
    const [activeCategory, setActiveCategory] = useState('Wedding');
    const [isLoading, setIsLoading] = useState(false);
    const [filteredData, setFilteredData] = useState(data.filter(item => item.category === activeCategory));

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setFilteredData(data.filter(item => item.category === activeCategory));
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [activeCategory]);

    const onChangePortfolio = (category) => {
        setActiveCategory(category);
    };



    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >

            <div className="banniere-portfolio">
                <Image
                    width={1000}
                    height={1000}
                    alt=""
                    placeholder="blur"
                    blurDataURL="/assets/image/Banniere/IMG_6343.JPG"
                    src="/assets/image/Banniere/IMG_6343.JPG" />
                <h1 className=" title title-portfolio"> Wedding </h1>
            </div>


            <div className="portfolio-section">
                <div className="type">
                    {
                        data.map((item, index) => (
                            <span onClick={() => onChangePortfolio(item.category)} className={item.category === activeCategory ? 'active' : ''} key={index}> {item.category} </span>
                        ))
                    }
                    {/* <span className="active"> Wedding </span>
                    <span> Portrait </span>
                    <span> Corporate </span>
                    <span> Culinaire </span>
                    <span> Produit </span> */}
                </div>
                <div className="photo">
                    {
                        isLoading
                            ?
                            <> <span className="loader"></span>
                            </>
                            :
                            filteredData[0].photo.map((item, index) => (
                                <motion.div 
                                    initial={{opacity: 0 , x : 200}}
                                    animate={{opacity: 1 , x:0}}
                                    transition={{ duration : 0.5, delay: index*0.1}}
                                    key={index} 
                                    className="one-image">
                                    <Image
                                        width={500}
                                        height={500}
                                        alt=""
                                        className="image-port" src={`/assets/image/Portfolio/${filteredData[0].category}/${item}`} />
                                </motion.div>
                            ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Page;