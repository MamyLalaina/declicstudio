import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a></li>
            </ul>
            <p>&copy;2024 <a href="http://declic-mg.vercel.app"> Declic Mg  </a>| All Rights Reserved</p>
        </footer>
    )
}

export default Footer;