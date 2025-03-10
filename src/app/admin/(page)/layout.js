'use client'

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import SideBar from "../../component/admin/sidebar/sidebar";
import Header from "../../component/admin/header/header"

const layout = ({ children }) => {
    return (
        <NextUIProvider>
            <div>
                <SideBar />

                <div className="content">
                    {children}
                </div>
            </div>
        </NextUIProvider>
    )
}

export default layout;