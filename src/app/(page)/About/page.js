import React from "react";
import Image from "next/image";

const Page = () => {
    return(
        <div class="about-page">
        <div class="first-line">


            <div class="about-photo">
                <Image
                width={5000}
                height={500}
                class="about-img"  src="/assets/image/About/_MG_1749.jpg" />
            </div>
            <div class="about-text">
                <h1> Declic studio MG </h1>
                <p> <i> Déclic Studio MG a été créer en 2019 par une groupes de 4 personnes qui ont une passion ardente
                        pour
                        la photographie. </i> </p>
                <p> <i> Depuis l'année 2019, nous avons parcouru un chemin remarquable, élargissant notre portée,
                        perfectionnant notre métier et établissant des liens durables avec nos clients. Chaque séance
                        photo
                        est une nouvelle aventure.</i> </p>
                <p> <i> Chez Déclic Studio MG, nous croyons fermement que chaque moment est précieux et mérite d'être
                        préservé pour l'éternité. Notre vision est de transformer les instants fugaces en souvenirs
                        impérissables, en capturant l'émotion, la beauté et l'authenticité dans chaque cliché. </i> </p>
                <p> <i> En tant que studio de photographie, notre engagement envers nos clients va au-delà de simplement
                        prendre des photos. Nous nous efforçons de créer une expérience exceptionnelle à chaque étape du
                        processus, de la planification initiale à la livraison finale, en veillant à ce que chaque
                        client se
                        sente valorisé, entendu et inspiré. </i> </p>

                <ul>
                    <li>
                        declicstudio.mg@gmail.com
                    </li>
                    <li>
                        +261 34 22 669 33
                    </li>
                    <li>
                        Analalamahitsy , Antananarivo , Madagascar
                    </li>
                </ul>

                <button class="btn btn-contact"> Contactez-nous </button>
            </div>
        </div>
        <div class="second-line">
            <div class="title-reference">
                <h2 > Ils nous font confiances </h2>
                <p> <i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam vero amet et aliquam
                    molestias </i>
                </p>
            </div>
            <div class="ref-img">
                <div>
                    <Image
                    width={5000}
                    height={500}
                    class="img-ref"
                        src="/assets/image/RefLogo/307311421_781601183107763_7745763245076275816_n.gif" />
                </div>
                <div>
                    <Image
                    width={5000}
                    height={500}
                    class="img-ref"
                        src="/assets/image/RefLogo/358338877_663027902410365_7530688746763537755_n.png" />
                </div>
                <div>
                    <Image
                    width={5000}
                    height={500}
                    class="img-ref"
                        src="/assets/image/RefLogo/company1.png" />
                </div>
                <div>
                    <Image
                    width={5000}
                    height={500}
                    class="img-ref"
                        src="/assets/image/RefLogo/company2.png" />
                </div>
                <div>
                    <Image
                    width={5000}
                    height={500}
                    class="img-ref"
                        src="/assets/image/RefLogo/307311421_781601183107763_7745763245076275816_n.gif" />
                </div>
                <div>
                    <Image
                    width={5000}
                    height={500}
                    class="img-ref"
                        src="/assets/image/RefLogo/307311421_781601183107763_7745763245076275816_n.gif" />
                </div>
                <div>
                    <Image
                    width={5000}
                    height={500}
                    class="img-ref"
                        src="/assets/image/RefLogo/307311421_781601183107763_7745763245076275816_n.gif" />
                </div>
                <div>
                    <Image
                    width={5000}
                    height={500}
                    class="img-ref"
                        src="/assets/image/RefLogo/307311421_781601183107763_7745763245076275816_n.gif" />
                </div>
                

            </div>
        </div>
    </div>
    )
}

export default Page;