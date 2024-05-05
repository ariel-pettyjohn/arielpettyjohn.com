import { useEffect, useRef } from "react";

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

export default function Layout({ Page, props }) {
    const footerRef = useRef();

    const updateMainOffset = () => document.documentElement.style.setProperty(
        '--main-offset', 
        `calc(${footerRef.current.scrollHeight}px + var(--layout-offset))`
    );

    useEffect(() => {
        updateMainOffset();
    }, [footerRef.current]);

    useEffect(() => {
        const handleResize 
            = window.addEventListener("resize", () => updateMainOffset());
        return () => handleResize;
    }, []);

    const className = `
        ${styles.container}
        ${textFont.variable}
        ${headingFont.variable}
    `;

    return (
        <div className={className}>
            <Page {...props} />

            <Footer ref={footerRef} />
        </div>
    );
}
