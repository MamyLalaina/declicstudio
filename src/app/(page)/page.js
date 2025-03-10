'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../component/MotionLoader/Loader";



import Link from "next/link";
import 'animate.css';


import { LazyMotion, domAnimation, motion, AnimatePresence } from "framer-motion"


import FeedBack from '../component/feedback/FeedBack'
import NextJsCarousel from "../component/carousel/carouselBannier";


export default function Home() {
  const ClientFeedbackData = [
    {
      text: "L'équipe a fait un travail extraordinaire en développant notre application mobile. Leur engagement envers la qualité et leur professionnalisme sont vraiment impressionnants. Nous sommes ravis de collaborer avec votre entreprise.",
      nom: "ACME Corp",
      detCompany: "Tech Solutions Ltd"
    },
    {
      text: "Votre expertise et votre service client exceptionnel ont vraiment fait la différence dans la réalisation de notre site web. Nous sommes reconnaissants pour votre travail acharné et votre dévouement envers notre projet.",
      nom: "XYZ Enterprises",
      detCompany: "Innovate IT Solutions"
    },
    {
      text: "Le professionnalisme et la créativité de votre équipe ont dépassé nos attentes. Nous sommes ravis des résultats obtenus grâce à votre expertise en développement web. Merci pour cette collaboration fructueuse.",
      nom: "EFG Company",
      detCompany: "Digital Innovations Inc."
    },
    {
      text: "Nous tenons à exprimer notre satisfaction pour le service exceptionnel que votre équipe a fourni tout au long de la création de notre plateforme en ligne. Votre dévouement envers l'excellence a été remarquable.",
      nom: "PQR Solutions",
      detCompany: "Software Experts LLC"
    },
    {
      text: "Nous sommes impressionnés par le professionnalisme et l'engagement de votre équipe envers la réussite de notre projet. Votre expertise en développement web a véritablement donné vie à notre vision. Merci pour cette collaboration enrichissante.",
      nom: "LMN Services",
      detCompany: "TechGenius Corporation"
    }
  ]



  const handleRedirect = () => {
    router.push('/reservation'); // Remplacez '/destination' par l'URL de votre choix
  };

  /// Loader 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 0); // Temps de chargement simulé
    return () => clearTimeout(timer); // Nettoyage
  }, []);
  /// Loader end

  return (
    <LazyMotion features={domAnimation}>

      <AnimatePresence>
        {isLoading ? (
          <Loader key="loader" />
        ) : (

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            id="body"
          >
            <section className="banniere">
              <NextJsCarousel />
              {/* <div className="text-banniere">
                <div className="text">
              <p className="ds"> DECLIC STUDIO MG</p>
              <p className="slogan"> " L'art de capturer vos émotions " </p>
            </div>
              </div> */}
            </section>
            <section className="service">

            </section>

            <section className="portfolio">

              <div className="first">

                <div className="photos">
                  <div className="left">
                    <Image
                      width={1000}
                      height={1000}
                      alt="some text alt"
                      src="/assets/image/Wedd/IMG_0646.JPG" />
                  </div>
                  <div className="right">

                    <div className="first-line">
                      <div className="first-line-image">
                        <Image
                          width={1000}
                          height={1000}
                          alt="some text alt"
                          src="/assets/image/Wedd/IMG_2448.JPG" />
                      </div>
                      <div className="first-line-image">
                        <Image
                          width={1000}
                          height={1000}
                          alt="some text alt"
                          src="/assets/image/Wedd/IMG_6606.JPG" />
                      </div>
                    </div>
                    <div className="second-line">
                      <Image
                        width={1000}
                        height={1000}
                        alt="some text alt"
                        src="/assets/image/Wedd/IMG_2025.jpg" />
                    </div>
                  </div>

                </div>

              </div>
              <div className="text-porf">
                <h2> Wedding </h2>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum rem error ipsam accusantium facere?
                  Odit, aliquam beatae, doloremque, quisquam numquam harum fuga labore soluta aperiam ratione quaerat
                  inventore iusto impedit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea blanditiis officia laudantium sit
                  fugit et, esse ratione excepturi qui perspiciatis libero aperiam ab iste. Quae est excepturi aperiam
                  illo?</p>
                <Link href="/reservation" >
                  <button className="btn btn-transparent"> Reserver </button>
                </Link>

              </div>

            </section>


            <div>
              <h1 className="title"> Profesionnal photography </h1>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, numquam itaque, natus rem, impedit
                eveniet culpa tenetur quis praesentium quisquam animi ad earum nemo.
              </p>
              <section className="other-service">
                <div className="list">
                  <div className="service">
                    <Image
                      width={1000}
                      height={1000}
                      alt="some text alt"
                      src="/assets/image/Service/_MG_1709.jpg" />

                    <h3 className="type"> Portrait </h3>

                  </div>
                  <div className="service">
                    <Image
                      width={1000}
                      height={1000}
                      alt="some text alt"
                      src="/assets/image/Service/_MG_4542.jpg" />

                    <h3 className="type"> Portrait </h3>

                  </div>
                  <div className="service">
                    <Image
                      width={1000}
                      height={1000}
                      alt="some text alt"
                      src="/assets/image/Service/_MG_7955.jpg" />
                    <h3 className="type"> Portrait </h3>

                  </div>
                  <div className="service">
                    <Image
                      width={1000}
                      height={1000}
                      alt="some text alt"
                      src="/assets/image/Service/_MG_02.jpg" />
                    <h3 className="type"> Portrait </h3>

                  </div>
                  <div className="service">
                    <Image
                      width={1000}
                      height={1000}
                      alt="some text alt"
                      src="/assets/image/Service/IMG_7938.JPG" />
                    <h3 className="type"> Portrait </h3>

                  </div>
                  <div className="service">
                    <Image
                      width={1000}
                      height={1000}
                      alt="some text alt"
                      src="/assets/image/Service/_MG_1709.jpg" />
                    <h3 className="type"> Portrait </h3>

                  </div>
                </div>
              </section>
            </div>


            <div className="category">

              <div className="vertical-cat">
                <Image
                  width={1000}
                  height={1000}
                  alt="some text alt"
                  src="/assets/image/Category/port.jpg" />
                <h2> mariage</h2>
              </div>
              <div className="horizontal-cat">
                <div className="first-line">
                  <Image
                    width={1000}
                    height={1000}
                    alt="some text alt"
                    src="/assets/image/Category/wedd.JPG" />
                  <h2> portrait</h2>
                </div>
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    alt="some text alt"
                    src="/assets/image/Category/cullinaire.jpg" />
                  <h2> culinaire</h2>
                </div>
              </div>
              <div className="horizontal-cat">
                <div className="first-line">
                  <Image
                    width={1000}
                    height={1000}
                    alt="some text alt"
                    src="/assets/image/Category/immo.jpg" />
                  <h2> immo</h2>
                </div>
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    alt="some text alt"
                    src="/assets/image/Category/corpo.jpg" />
                  <h2> produit</h2>
                </div>
              </div>
              <div className="vertical-cat">
                <Image
                  width={1000}
                  height={1000}
                  alt="some text alt"
                  src="/assets/image/Category/produit.jpg" />
                <h2> corporate</h2>
              </div>







            </div>


            <section className="avis-client">
              <div className="avis-text">
                <h1> Avis client </h1>
                {/* <div>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore rerum amet debitis
                iusto deserunt? Sint commodi, totam tempore obcaecati facere eos, ut doloremque similique eaque
                repellendus animi deserunt sunt. </p>
              <h3> <i> Mamy Lalaina Rakotoarimalala </i> </h3>
              <span> ~ CEO DeclicMg </span>
            </div> */}
                <FeedBack data={ClientFeedbackData} />
              </div>
              <div className="overlay"></div>


            </section>

            <div className="contact-formulaire">
              <h1> Contactez-nous </h1>
              <div className="first-line-contact">
                <input placeholder="Nom" type="text" />
                <input placeholder="Prénom" type="text" />
              </div>
              <input placeholder="Email" className="second-input-line" type="text" />

              <textarea placeholder="Votre texte ici" id="" cols="100" rows="10"></textarea>
              <div className="btn-envoyer">
                <Link href="" className="btn"> Envoyer </Link>

              </div>

            </div>

          </motion.div>

        )}
      </AnimatePresence>

    </LazyMotion >

  );
}
