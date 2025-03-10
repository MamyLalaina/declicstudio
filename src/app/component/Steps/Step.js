import Image from "next/image";
import React from "react";

const Steps = () => {
    const steps = [
        {
            "id": 1,
            "step": "Transmission of details",
            "description": "Private exchange of order details: quantity, photos, size, color..."
        },
        {
            "id": 2,
            "step": "Preparation of quote",
            "description": "Evaluation and creation of a detailed cost estimation associated with the specific request"
        },
        {
            "id": 3,
            "step": "Order confirmation",
            "description": "Validation of a purchase request with a well-defined deposit"
        },
        {
            "id": 4,
            "step": "Shipping",
            "description": "Settlement of the balance by the client followed by the delivery of the items"
        }
    ]

    return (
        <div className="steps-component">

            {
                steps.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="img-cont">
                                <Image
                                    className="image"
                                    src={`/Steps/${item.id}.png`}
                                    width={1000}
                                    height={1000}
                                    alt={`step ${item.step}`}
                                />
                            </div>

                            <h1>
                                {item.step}
                            </h1>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Steps;