import Head from 'next/head';

import { getCurrentYear } from '../util';

import Resume from '../components/Resume/Resume';

import resume from '../content/resume';

import styles from '../styles/Home.module.scss';

export default function Home () {
     return (
        <>
            <Head>
                <title>Ariel Pettyjohn</title>

                <meta name='description' content='Ariel Pettyjohn' />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <small className={styles.downloadPDF}>
                <a 
                    href   = {resume.pdf}
                    target = "_blank"
                    rel    = "noreferrer"
                >
                    Download PDF
                </a>
            </small>

            <main className={styles.main}>
                <Resume {...resume} />

                <footer className={styles.footer}>
                    <span className={styles.copyright}>
                        Copyright &copy; {getCurrentYear()} Ariel Pettyjohn 
                    </span>
                </footer>
            </main>
        </>
    )
}