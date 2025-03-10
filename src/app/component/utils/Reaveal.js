'use client'

import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";



const Reveal = ({children, direction = 'fadeInUp' , delay=0, duration=2}) => {

    const [calssname, setClassName] = useState('hidden');
    const [style, setStyle] = useState({overflox :'hidden',visibility: 'hidden'});

    const ref = useRef();
    const { events: events } = useDraggable(ref, {
        applyRubberBandEffect: true,
    });

    // const stausClass = 
    // let calssname = '';

    useEffect(() => {
        
        let animationFrameId;
        let containerVisible = false;

        const handleScroll = () => {
            setStyle({overflox :'hidden'})
             setClassName(`animate__animated animate__${direction} animate__delay-${delay}ms animate__duration-${duration}s animate__fill-mode-forwards`)

        }

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                containerVisible = true;
                animationFrameId = requestAnimationFrame(handleScroll);
            } 
        });

        if (ref.current) {
            intersectionObserver.observe(ref.current);
            if (ref.current.getBoundingClientRect().top < window.innerHeight) {
                handleScroll();
            }
        }

        return () => {
            if (ref.current) {
                intersectionObserver.unobserve(ref.current);
            }
        };

    },[])

    return(
        <div 
        ref={ref}
        className={calssname}
            style={style}
        >
            {children}
        </div>
    )
}

export default Reveal;