import Head from 'next/head';

import Resume from '../components/Resume/Resume';

import resume from '../content/resume';

export default function Home () {
     return (
        <>
            <Head>
                <title>Ariel Pettyjohn</title>

                <meta name='description' content='Ariel Pettyjohn' />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Resume {...resume} />
        </>
    )
}