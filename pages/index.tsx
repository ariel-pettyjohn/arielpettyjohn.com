import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ariel Pettyjohn | Web Application Engineer + Developer</title>

                <meta
                    name    = 'description'
                    content = 'Portfolio website for Ariel Pettyjohn | Web Application Engineer + Developer'
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Future home of arielpettyjohn.com
                </h1>
            </main>
        </div>
    )
}

export default Home
