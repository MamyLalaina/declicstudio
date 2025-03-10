import Image from "next/image";
import React from "react";

const Page = () => {
    return (
        <div className="location-page">
            <section id="Materiels">
                <h1 className="section_title">Nos Materiels</h1>
                <div className="images">
                    <ul>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0014.jpg"
                                    alt="Flash cobra Godox TT600"
                                />
                            </div>
                            <span>Flash cobra Godox TT600</span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0015.jpg"
                                    alt="Lens canon EF 24-105mm f4 L USM"
                                />
                            </div>
                            <span>Lens canon EF 24-105mm f4 L USM </span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0017.jpg"
                                    alt="Canon 6D"
                                />
                            </div>
                            <span>Canon 6D</span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0018.jpg"
                                    alt="Canon 5D Mark II"
                                />
                            </div>
                            <span>Canon 5D Mark II </span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0019.jpg"
                                    alt="Objectif CANON 50mm"
                                />
                            </div>
                            <span>Objectif CANON 50mm </span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0019.jpg"
                                    alt="Objectif CANON 100mm"
                                />
                            </div>
                            <span>Objectif CANON 100mm</span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0022.jpg"
                                    alt="Objectif CANON 35mm"
                                />
                            </div>
                            <span>Objectif CANON 35mm</span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0023.jpg"
                                    alt="Trigger"
                                />
                            </div>
                            <span>Trigger </span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0024.jpg"
                                    alt="Softbox"
                                />
                            </div>
                            <span>Softbox </span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0025.jpg"
                                    alt="Trépied 1m50"
                                />
                            </div>
                            <span>Trépied 1m50 </span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0026.jpg"
                                    alt="Parapluie transparent"
                                />
                            </div>
                            <span>Parapluie transparent</span>
                            <span className="prix">300.000Ar</span>
                        </li>
                        <li className="Materiel">
                            <div>
                                <Image
                                    width={250}
                                    height={250}
                                    className="img"
                                    src="/assets/image/materiel/IMG-20240606-WA0027.jpg"
                                    alt="Stabilisateur DJI Ronin"
                                />
                            </div>
                            <span>Stabilisateur DJI Ronin</span>
                            <span className="prix">300.000Ar</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="liste-location">
                <h2>Mes locations</h2>
                <div className="liste">
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Nombre</th>
                                <th>Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Canon R5</td>
                                <td>1</td>
                                <td>120.000 Ar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="liste-footer">
                    <table>
                        <thead>
                            <tr>
                                <th>Total :</th>
                                <th>120.000 Ar</th>
                            </tr>
                        </thead>
                    </table>
                    <button className="btn">Valider</button>
                </div>
            </section>
        </div>
    )
}

export default Page;
