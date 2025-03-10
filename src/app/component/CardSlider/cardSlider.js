'use client'

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import img from "../../../../public/product/418748500_987305369559653_3878546624131611816_n.jpg";
import './cardSlider.css';
import { useDraggable } from "react-use-draggable-scroll";



const SliderBox = () => {


    const [formClass, setFormClass] = useState("form");
    const [fichiers, setFichiers] = useState([]);
    const ref = useRef();
    const { events: events } = useDraggable(ref, {
        applyRubberBandEffect: true,
    });
    const [onLoadStates, setOnLoadStates] = useState({});

    const handleImageLoad = (fileName) => {
        setOnLoadStates(prevStates => ({
            ...prevStates,
            [fileName]: true
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/listeFichier');
                if (response.ok) {
                    const data = await response.json();
                    setFichiers(data.fichiers);
                } else {
                    console.error('Erreur lors de la récupération des fichiers');
                }
            } catch (error) {
                console.error('Erreur réseau', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        let initanimation = 1;
        let animationFrameId;
        let containerVisible = false;

        const handleScroll = () => {
            if (ref.current && containerVisible) {
                ref.current.scrollLeft += initanimation; // Défilement vers la droite

                // // Si on atteint la fin de la liste, revenir au début
                const initanimationFrame = () => {
                    console.log('3 seconde zay ry ianona a');

                    // initanimation = requestAnimationFrame(initanimationFrame);
                }
                if (ref.current.scrollLeft >= ref.current.scrollWidth - ref.current.clientWidth) {
                    setTimeout(() => {
                        // setInitanimation(-1);
                        initanimation = -1
                        console.log(initanimation);
                    }, 1000)
                }
                else if (ref.current.scrollLeft === 0 && initanimation === -1) {
                    // Si on revient au début de la liste et on défile vers la gauche, rétablir la direction du défilement
                    setTimeout(() => {
                        // setInitanimation(-1);
                        initanimation = 1
                        console.log(initanimation);
                    }, 1000)
                }

                animationFrameId = requestAnimationFrame(handleScroll);
            }
        };

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                containerVisible = true;
                animationFrameId = requestAnimationFrame(handleScroll);
            } else {
                containerVisible = false;
                cancelAnimationFrame(animationFrameId);
            }
        });

        if (ref.current) {
            intersectionObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                intersectionObserver.unobserve(ref.current);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);




    return (
        <div
            // onMouseDown={() => handleMouseDown(e)} 
            // onMouseUp={(e) => handleMouseUp(e)}
            // onMouseMove={(e) => handleMouseMove(e)}
            className="slider"
            {...events}
            ref={ref}
        // onMouseDown={() => console.log('mouse down here')}

        >
            <div
                className={formClass}
            >
                {
                    fichiers.map((item, index) => {
                        return (
                            <div key={index} className="item">
                                <div className="content">
                                    <Image 
                                        className="img-card" 
                                        width={500} height={500} 
                                        src={`/Prod/${item}`} 
                                        alt="image" 
                                        onLoad={() => handleImageLoad(item)}
                                    />
                                    <div className="des">
                                        <div>
                                            <h1>  Image name</h1>
                                        </div>
                                    </div>
                                </div>
                                {
                                    !onLoadStates ? <p> wawawaw </p> : <> </>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default SliderBox;

