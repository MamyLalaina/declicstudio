'use client'

import Image from "next/image";
import Link from "next/link";
import React , {useEffect, useState} from "react";
import classnames from 'classnames';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const combinedClassName = classnames('header', {
        'scrolled': scrollPosition > 100
    });
    return (
        // <header>
        //     <div className="logo-container">
        //         <Image
        //             src={`/logo/artwear.png`}
        //             width={500}
        //             height={500}

        //             alt="art wear logo"
        //         />
        //     </div>
        //     <div className="right">
        //         <div className="menu">
        //             <ul className="nav">
        //                 <li> <Link href="#" className="active-menu" > Home </Link></li>
        //                 <li> <Link href="#" > Art wear collection </Link></li>
        //                 <li> <Link href="#" > T-shirt</Link></li>
        //                 <li> <Link href="#" > Sweatshirt</Link></li>
        //                 <li> <Link href="#" > Personnal design </Link></li>

        //             </ul>
        //         </div>
        //         <div className="other-logo">
        //             <Link href="#">
        //                 <Image
        //                     className="image"
        //                     width={20}
        //                     height={20}
        //                     src={`/logo/facebook_logo_icon_143786.png`}
        //                     alt="facebook"
        //                 />
        //             </Link>
        //             <Link href="#">
        //                 <Image
        //                     className="image"
        //                     width={20}
        //                     height={20}
        //                     src={`/logo/instagram-logo-black-256.png`}
        //                     alt="facebook"
        //                 />
        //             </Link>
        //             <Link href="#">
        //                 <Image
        //                     className="image"
        //                     width={20}
        //                     height={20}
        //                     src={`/logo/whatssapp-logo-black.png`}
        //                     alt="facebook"
        //                 />
        //             </Link>

        //         </div>
        //     </div>
        // </header>
        <header className={combinedClassName}>
            <nav className="menu">
                <ul>
                    <li><Link href="/" className="active">Home</Link></li>
                    <li><Link href="About" className="active">About</Link></li>
                    <div className="logo">
                        <Image
                            width={500}
                            height={500} 
                            src={`/assets/image/Logo/Fichier 1@4x.png`}
                            alt="declic studio"
                        />
                    </div>
                    <li><Link href="Location" className="active">Location</Link></li>
                    <li><Link href="Portfolio" className="active">Portfolio</Link></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;