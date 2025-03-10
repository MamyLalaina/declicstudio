// pages/-app.js
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const NextJsCarousel = () => {
    return (
        <div>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}>
                <div>
                    <Image
                        width={1000}
                        height={1000}
                        src="/assets/image/Banniere/P1038179.JPG"
                        alt="image1"
                    />
                   
                </div>
                <div>
                    <Image
                        width={1000}
                        height={1000}
                        src="/assets/image/Banniere/IMG_6343.JPG"
                        alt="image1"
                    />
                    
                </div>
                <div>
                    <Image
                        width={1000}
                        height={1000}
                        src="/assets/image/Banniere/_MG_5455.JPG"
                        alt="image1"
                    />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default NextJsCarousel;
