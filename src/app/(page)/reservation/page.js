import React from "react";
// import Loading from "./loading12";

const Page = () => {
    return (
        <div class="reservation">
            {/* <Suspense fallback={<Loading />}> */}

                <h1> Contactez-nous </h1>
                <div>
                    <label>
                        Nom
                    </label>
                    <input class="second-input-line" placeholder="Nom" type="text" />

                </div>
                <div>
                    <label>
                        Prénom
                    </label>
                    <input class="second-input-line" placeholder="Nom" type="text" />

                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input class="second-input-line" placeholder="Nom" type="text" />

                </div>
                <div class="one-line">
                    <label>
                       {`Type d'évènement`} 
                    </label>
                    <select name="" id="">
                        <option value="">Mariage</option>
                        <option value="">Fiançaille</option>
                        <option value="">Mariage Civile</option>
                        <option value="">Baptème</option>
                        <option value="">Anniversaire</option>
                        <option value="">Sortie de promotion</option>
                        <option value=""> Autre... </option>


                    </select>
                </div>

                <div class="one-line">
                    <div>
                        <input type="checkbox" name="photo" id="" /> <span> Photo </span>

                    </div>
                    <div>
                        <input type="checkbox" name="video" id="" /> <span> Vidéo </span>

                    </div>
                    <div>
                        <input type="checkbox" name="drone" id="" /> <span> Drone </span>

                    </div>
                </div>
                <div class="one-line">
                    <div>
                        <input type="radio" name="photographe" checked="" /> <label> 1 photographe </label>

                    </div>
                    <div>
                        <input type="radio" name="photographe" id="" /> <span> 2 photographe </span>

                    </div>
                    <div>
                        <input type="radio" name="photographe" id="" /> <span> 3 photographe </span>

                    </div>
                </div>
                <div class="one-line">
                    <div>
                        <input type="radio" name="videaste" checked id="" /> <span> 1 vidéaste </span>

                    </div>
                    <div>
                        <input type="radio" name="videaste" id="" /> <span> 2 vidéaste </span>

                    </div>
                    <div>
                        <input type="radio" name="videaste" id="" /> <span> 3 vidéaste </span>

                    </div>
                </div>
                <div>

                </div>
                <div class="btn-envoyer">
                    <button class="btn btn-resa-env"> Envoyer </button>
                </div>
            {/* </Suspense> */}

        </div>
    )
}


export default Page;