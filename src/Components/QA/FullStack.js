import React from 'react';
import Footer from "../Footer";
import Header from "../Header";
import "../../style/qa/QA.scss"
import Canvas from "./Canvas";
import BackButton from "../BackButton";

const FullStack = () => {

    return (
        <>
            <div style={{position: "fixed", width: "100%"}}><Header /></div> >
            <Footer />
            <Canvas />
            <BackButton/>
        </>
    );
}

export default FullStack;