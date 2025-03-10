'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../UI/searchicon"
import { SunIcon, MoonIcon } from "../../UI/LightModeIcon"
import { Input, Switch, User } from "@nextui-org/react";
import Link from "next/link";
import Badge from "../UI/Badge"

const SideBar = () => {
    const [lightSelected, setLightSelected] = useState(true);
    const basuurl = '/admin'

    const menu = [
        { menu: 'Home', link: `${basuurl}`, icon: 'home' },
        { menu: 'Product', link: `${basuurl}/produit`, icon: 'produit' },
        { menu: 'Content & Appearance', link: `${basuurl}/contenu`, icon: 'site' },
        { menu: 'User', link: `${basuurl}`, icon: 'user' },
        { menu: 'Notification', link: `${basuurl}`, icon: 'notification' },
        // { menu: 'Home', link: '/admin', icon: 'home' },
        { menu: 'Setting', link: `${basuurl}`, icon: 'setting' }
    ]

    const updateTheme = (width) => {
        console.log('width change');
        // document.documentElement.style.setProperty('--side-bar-width', '5%');
    };


    useEffect(() => {
        updateTheme()
    }, [])

    return (
        <div className="sidebar">
            {/* <div className="back-blur"></div> */}
            <div className="header-side">
                <div className="logo-back-office">
                    <Image
                        // className="image"
                        src={`/logo/artwear.png`}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div>
                    <Input
                        isClearable
                        radius="lg"
                        classNames={{
                            label: "text-black/50 dark:text-white/90",
                            input: [
                                "bg-transparent",
                                "text-black/90 dark:text-white/90",
                                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                            ],
                            innerWrapper: "bg-transparent",
                            inputWrapper: [
                                "shadow-xl",
                                "bg-default-200/50",
                                "dark:bg-default/60",
                                "backdrop-blur-xl",
                                "backdrop-saturate-200",
                                "hover:bg-default-200/70",
                                "dark:hover:bg-default/70",
                                "group-data-[focused=true]:bg-default-200/50",
                                "dark:group-data-[focused=true]:bg-default/60",
                                "!cursor-text",
                            ],
                        }}
                        placeholder="Type to search..."
                        startContent={
                            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                </div>
            </div>

            <div className="menu-back">
                <div>
                    <p> Menu </p>
                </div>
                <div className="menu-list">
                    {
                        menu.map((item, index) => {
                            return (
                                <Link key={index} className="item-menu" href={item.link} >
                                    {/* <Badge > */}
                                        <Image
                                            className="img"
                                            src={`/iconback/${item.icon}.png`}
                                            width={50}
                                            height={50}
                                        />
                                    {/* </Badge> */}

                                    {item.menu}

                                </Link>

                            )
                        })
                    }
                </div>
            </div>

            <div className="footer-side">
                <div className="logout-btn">
                    <Image
                        className="img"
                        src={`/iconback/logout.png`}
                        alt="log out icon"
                        width={50}
                        height={50}
                    />
                    <span>Log out </span>
                </div>
                <div className="light-mode">
                    <span className="light-mode-label">
                        <span>{lightSelected ? <SunIcon /> : <MoonIcon />} </span>


                        Light mode
                    </span>
                    <Switch
                        defaultSelected
                        size="md"
                        color="success"
                        startContent={<SunIcon />}
                        endContent={<MoonIcon />}
                    >
                    </Switch>
                </div>

                <User
                    name="Jane Doe"
                    description="Product Designer"
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    }}
                />
            </div>

        </div>
    )
}

export default SideBar;
