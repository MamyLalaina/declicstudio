import React from "react";
import Image from "next/image";
// import img from "../../../../public/product/42"

const Card = (props) => {
    // console.log(props.data);
    return (
        <div className="one-collection active">
            <div className="image">
                <Image
                    className="img"
                    width={2000}
                    height={1000}
                    src={`/collection/${props.data.id}.jpg`}
                    alt="image"
                />
            </div>
            <>
                <div className="text-collection">
                    <span className="price"> 50,000 Ar </span>

                    <h2>Limited edition </h2>
                </div>
                <div className="etat-collection">
                    <div className="etat">  </div>
                    <span> disponible sur commande </span>
                </div>
            </>

        </div>
    )
}

export default Card;