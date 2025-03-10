'use client'

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { config } from "react-spring";
import Card from "./card";
import ViewMoreBtn from '../UI/ViewMoreBtn'

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});


const Caroussel = (props) => {

  const dataex = [
    {
      "id": 1,
      "collection_name": "Tendances Malagasy",
      "description": "Une collection de t-shirts inspirés des motifs traditionnels malgaches pour célébrer la culture de Madagascar."
    },
    {
      "id": 2,
      "collection_name": "Exploration des Régions",
      "description": "Des t-shirts illustrant la richesse naturelle et la diversité des paysages de Madagascar, de la forêt tropicale aux plages immaculées."
    },
    {
      "id": 3,
      "collection_name": "Artisanat Local",
      "description": "Une sélection de t-shirts mettant en valeur l'artisanat malgache traditionnel, tels que les broderies et les motifs textiles uniques."
    },
    {
      "id": 4,
      "collection_name": "Faune Endémique",
      "description": "Des t-shirts représentant les espèces de faune endémiques de Madagascar, comme le lémurien et le fossa, pour sensibiliser à la conservation de la biodiversité."
    },
    {
      "id": 5,
      "collection_name": "Expressions Malagasy",
      "description": "Des t-shirts arborant des expressions populaires malgaches et des proverbes pour partager la richesse linguistique et culturelle de Madagascar."
    }
  ]





  const slides = dataex.map((item, index) => {
    return { key: index, content: <Card data={{ c_name: item.collection_name, id: index + 1 }} /> }
  })


  const table = slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(1);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  const [slideNo, setSlideNo] = useState(null);
  const [activeItem, setActiveItem] = useState({
    id: 0,
    collection_name: '',
    description: '',
    photo: ''
  });
  const [isAnimating, setIsAnimating] = useState(true)



  useEffect(() => {
    // setOffsetRadius(1);
    setShowArrows(props.showArrows);

  }, [props.offset, props.showArrows]);

  useEffect(() => {
    setIsAnimating(true)
    const intervalId = setInterval(() => {

      setGoToSlide(goToSlide => goToSlide + 1);

      // setIsAnimating(false)


    }, 5000);

    // Nettoyer l'intervalle lorsque le composant est démonté ou lorsque la dépendance de l'effet change
    let newSlideNo = getSlideKey(goToSlide + 1);
    setTimeout(() => {
      setIsAnimating(false);

    }, 1000)
    setTimeout(() => {
      // Ici, goToSlide ne sera pas immédiatement mis à jour

      // setActiveItem(dataex.find((item) => item.id == newSlideNo ))
      setSlideNo(newSlideNo);
      console.log(newSlideNo);

      setActiveItem(dataex.find((item) => item.id == newSlideNo))

      console.log(activeItem);

      // Désactive l'animation après un court délai
    }, 500);

    return () => clearInterval(intervalId);

  }, [goToSlide]);


  /// funciton
  const getSlideKey = (slideNo) => {
    const lenght = cards.length;

    // setIsAnimating(true)

    if (slideNo > lenght) {
      if (slideNo % lenght == 0){
        return lenght
      }
      else{
        return slideNo % lenght;
      }
    }

    return slideNo;
  }



  return (
    <div className="caroussel-container">
      <div className={`text-decription-box ${isAnimating ? 'blur-animation' : ''}`}>
        <h1 className="collection-title"> {activeItem.collection_name}</h1>
        <p className="collection-name"> Madagascar Collection  </p>
        <p className="descirption-text">  {activeItem.description} </p>
        <ViewMoreBtn />
      </div>
      <div
        className="caroussel"
      >
        <Carousel
          goToSlideDelay={700}
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.slow}
        />
      </div>
    </div>

  );
};

export default Caroussel;
