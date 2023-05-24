import React from 'react';

import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Resume () {
     return (
        <>
            <Head>
                <title>Ariel Pettyjohn</title>

                <meta name='description' content='Ariel Pettyjohn' />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.Resume}>
                <section className={styles.introduction}>
                    <aside className={styles.sidebar}>
                        <h1>
                            <span>Ariel Pettyjohn</span>
                            <span className="h2">Software Engineer</span>
                        </h1>

                        <address className={styles.contact}>
                            <span className={styles.text}>Seattle, Washington</span>
                            
                            <a 
                                href   = "tel:+14255432271"
                                target = "_blank"
                                rel    = "noreferrer"
                            >
                                <span className={styles.text}>Phone</span> 
                                <img className={styles.icon} src="phone.png" alt="Phone" />
                            </a>
                            
                            <a 
                                href   = "mailto:ariel.pettyjohn@gmail.com;me@ariel.pettyjohn.com"
                                target = "_blank"
                                rel    = "noreferrer"
                            >
                                <span className={styles.text}>Email</span>
                                <img className={styles.icon} src="email.png" alt="Email" />
                            </a> 
                            
                            <a 
                                href   = "http://www.linkedin.com/in/arielpettyjohn"
                                target = "_blank"
                                rel    = "noreferrer"
                            >
                                <span className={styles.text}>LinkedIn</span>
                                <img className={styles.icon} src="linkedin.png" alt="LinkedIn" />
                            </a>

                            <a 
                                href   = "https://github.com/ariel-pettyjohn"
                                target = "_blank"
                                rel    = "noreferrer"
                            >
                                <span className={styles.text}>GitHub</span>
                                <img className={styles.icon} src="github.png" alt="GitHub" />
                            </a>
                        </address>
                    </aside>

                    <div className={styles.content}>
                        <img src="/photo.png" alt="Ariel Pettyjohn" />

                        <ul className={styles.summary}>
                            <li>13 years as a Software Engineer leveraging cloud-native services and open-source technology stacks to implement software systems.</li>
                            <li>3 years directly managing junior engineers and cross-functional relationships between internal and external clients.</li>
                            <li>Led development of key platforms that collectively serve &gt; 15M monthly users for brands including Eurofins Genomics, Firestone, General Electric, Holiday World, Home Depot, and Pillsbury.</li>
                            <li>In business 13 years as an entrepreneur and freelance engineer, managing connections with subcontractors and vendors.</li>
                        </ul>
                    </div>
                </section>

                <main className={styles.main}>
                    <aside className={styles.sidebar}>
                        <h2>Skills</h2>

                        <dl className={styles.skills}>
                            <dt>Management:</dt> 
                            <dd>Agile, Scrum, Extreme Programming.</dd>

                            <dt>Processes:</dt> 
                            <dd>Root Cause Analysis, Six Sigma, Process Engineering, Product Development.</dd>
                            
                            <dt>Languages:</dt> 
                            <dd>JavaScript, TypeScript, HTML5/CSS3, Python, Shell, PHP, Scheme, Java.</dd>
                            
                            <dt>Libraries:</dt> 
                            <dd>Node.js, React, Redux, Express, Sass, Vue.</dd>

                            <dt>Frameworks:</dt>
                            <dd>Next.js, Laravel, Django.</dd>

                            <dt>Testing:</dt>
                            <dd>Cypress, Enzyme, Jest.</dd>

                            <dt>Databases:</dt> 
                            <dd>Firebase, MySQL, Redis, RDF.</dd>

                            <dt>Source Control:</dt>
                            <dd>Git, Subversion, Mercurial, Bazaar.</dd>

                            <dt>DevOps:</dt> 
                            <dd>Apache, AWS, Circle CI, Docker, Linux.</dd>
                        </dl>
                    </aside>

                    <div className={styles.content}>
                        <section className={styles.experience}>
                            <h2>Experience</h2>

                            <article>
                                <h3>
                                    <span>Solutions Architect</span>
                                    <span>2011 &ndash; Present</span>
                                    <span className="h4">Web Architecture Solutions, Seattle, WA</span>
                                </h3>

                                <ul>
                                    <li>AI/ML research performed at Indiana University published with dozens of citations.</li>
                                    <li>Delivered microsite to unveil Eurofins&apos; oligonucleotide synthesis technology, which drove 35% more traffic to the primary site on launch.</li>
                                    <li>Performed comprehensive content, performance, and SEO audits across the Eurofins portfolio of sites, which sped up content development time by 10%, improved load times by 20%, and lifted placement in organic search results.</li>
                                    <li>Developed proposals for brands including Four Roses Bourbon to demonstrate possible opportunities and use-cases of user-generated content.</li>
                                    <li>Maintained CRM system for corporate segment of Waste Management&apos;s &gt; 20 million customers.</li>
                                    <li>Built a fundraising portal for The Salvation Army that helped boost donations by 15% that year.</li>
                                </ul>
                            </article>

                            <article>
                                <h3>
                                    <span>Senior Web Application Developer</span>
                                    <span>2019 &ndash; 2021</span>
                                    <span className="h4">1stMILE, Redmond, WA</span>
                                </h3>

                                <ul>
                                    <li>Led front-end engineering and testing of financial products used in over 1,700 stores nationwide.</li>
                                    <li>Interviewed, trained, and mentored a diverse software development team, and advocated for an organizational commitment to career development.</li>
                                    <li>Integrated analytics to track customer journey across suite of 5 applications, and aggregated data into summary reports for white label partners.</li>
                                    <li>Spearheaded development of internal best practices, wrote documentation, and created training modules, which cut the training time for junior engineers by 50%.</li>
                                    <li>Collaborated with groups of designers, product developers, and data architects to anticipate front-end API needs weeks earlier.</li>
                                    <li>Liaised with executives to coordinate integration of credit applications and onboard 4 key strategic partners.</li>
                                    <li>Re-architected credit application integrations, which improved developer productivity by 4x.</li>
                                    <li>Implemented a consistent component architecture, which reduced code duplication by 20%.</li>
                                    <li>Refactored flagship web application, which eliminated 50% of unnecessary code.</li>
                                    <li>Abstracted automation scripts to simplify deployment workflow, which saved 10+ hours of development per week.</li>
                                </ul>
                            </article>

                            <article>
                                <h3>
                                    <span>Senior Web Developer</span>
                                    <span>2014 &ndash; 2015</span>
                                    <span className="h4">DBS Interactive, Louisville, KY</span>
                                </h3>

                                <ul>
                                    <li>Directed front-end development of content management systems for over a dozen clients.</li>
                                    <li>Crafted infographics for brands including Maker&apos;s Mark and The Kentucky Derby, which increased traffic to primary domains by 65% &ndash; 75% on launch.</li>
                                    <li>Managed Big Ass Fans&apos; ecommerce migration, which limited storefront load times by 10%.</li>
                                    <li>Engineered the first ecommerce storefront for the Holiday World theme park.</li>
                                    <li>Wrote PHP scripts to re-engineer the e-blast workflow for Humana, which increased turnaround 5x.</li>
                                    <li>Launched microsite to unveil the first launched wing roller coaster in the U.S.</li>

                                </ul>
                            </article>
                        </section>

                        <section className={styles.education}>
                            <h2>Education</h2>

                            <article>
                                <h3>
                                    <span>Economics</span>
                                    <span>2015 &ndash; 2016</span>
                                    <span className="h4">University of Louisville, Louisville, KY</span>
                                </h3>
                            </article>

                            <article>
                                <h3>
                                    <span>Computer Science and Mathematics</span>
                                    <span>2008 &ndash; 2010</span>
                                    <span className="h4">Indiana University Bloomington, Bloomington, IN</span>
                                </h3>
                            </article>
                        </section>
                    </div>
                </main>
            </section>
        </>
    )
}