import { useEffect, useRef, useState } from "react";

import Footer from "../Footer/Footer";

import { Rubik as HeadingFont } from "next/font/google";

import { Roboto_Slab as TextFont } from "next/font/google";

import styles from "./Layout.module.scss";

const headingFont = HeadingFont({
    weight  : ["400", "700"],
    subsets : ["latin"],
    style   : ["normal", "italic"],
    variable: "--heading-font"
});

const textFont = TextFont({
    weight  : ["400", "700"],
    subsets : ["latin"],
    variable: "--text-font"
});

export default function Layout({ Page, props/*: _props*/ }) {
    const footerRef = useRef();

    //const [footerHeight, setFooterHeight] = useState(0);
    
    //calc(var(--footer-height) + var(--layout-offset))

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--main-offset', 
            `calc(${footerRef.current.scrollHeight}px + var(--layout-offset))`
        );
        /*
        document.documentElement.style.setProperty(
            '--footer-height', 
            `${footerRef.current.scrollHeight}px`
        );
        */
        //setFooterHeight(footerRef.current.scrollHeight);
    }, [footerRef.current]);

    useEffect(() => {
        const foo = window.addEventListener("resize", () => {
            document.documentElement.style.setProperty(
                '--main-offset', 
                `calc(${footerRef.current.scrollHeight}px + var(--layout-offset))`
            );
            /*
            document.documentElement.style.setProperty(
                '--footer-height', 
                `${footerRef.current.scrollHeight}px`
            );
            */
        });
        return () => foo;
    }, []);

    const className = `
        ${styles.container}
        ${textFont.variable}
        ${headingFont.variable}
    `;

    //console.log(footerHeight)

    //const props = { marginBottom: footerHeight, ..._props };
        
    return (
        <div className={className}>
            <Page {...props} />

            <Footer ref={footerRef} />
        </div>
    );
}
