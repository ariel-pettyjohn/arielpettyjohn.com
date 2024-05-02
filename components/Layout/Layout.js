import Footer from "../Footer/Footer";

import { Rubik as HeadingFont } from "next/font/google";

import { Roboto_Slab as TextFont } from "next/font/google";

import styles from "./Layout.module.scss";

const headingFont = HeadingFont({
    weight  : "400",
    subsets : ["latin"],
    variable: "--heading-font"
});

const textFont = TextFont({
    weight  : "400",
    subsets : ["latin"],
    variable: "--text-font"
});

export default function Layout({ Page, props }) {
    const className = `
        ${styles.container}
        ${textFont.variable}
        ${headingFont.variable}
    `;
    
    return (
        <div className={className}>
            <Page {...props} />

            <Footer />
        </div>
    );
}
