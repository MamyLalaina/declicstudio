import  Slider  from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";

const FeedBack = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000
    }
    return (
        <>
            <Slider className="slider-style" {...settings}>
                {
                    props.data.map((item, index) => (
                        <>
                            <p> {item.text} </p>
                            <h3> <i> {item.nom} </i> </h3>
                            <span> ~ {item.detCompany} </span>
                        </>
                    ))
                }

            </Slider>
        </>
    )
}


export default FeedBack;