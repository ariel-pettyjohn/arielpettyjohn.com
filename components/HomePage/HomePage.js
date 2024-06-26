import Head from "next/head";

import Resume from "../Resume/Resume";

import resume from "../../content/resume";

import styles from "./HomePage.module.scss";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Ariel Pettyjohn</title>

                <meta name="description" content="Ariel Pettyjohn" />

                <link rel="icon" href="/favicon.ico" />

                <meta
                    name    = "viewport"
                    content = "width=device-width, initial-scale=1.0, viewport-fit=cover"
                />
            </Head>

            <small className={styles.downloadPDF}>
                <a href={resume.pdf} target="_blank" rel="noreferrer">
                    Download PDF
                </a>
            </small>

            <Resume {...resume} />
        </>
    );
}