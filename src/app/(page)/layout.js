import React from "react";
import Header from "../component/header/header";
import Footer from "../component/Footer/footer";

const layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default layout;