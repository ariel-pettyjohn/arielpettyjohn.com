import ContactInformation from '../ContactInformation/ContactInformation';

import styles from './Resume.module.css';

export default function Resume ({ 
    firstName, 
    lastName,
    title, 
    contactInformation, 
    summary, 
    skillsets, 
    experiences, 
    education 
}) {
    return (
        <section className={styles.Resume}>
            <small className={styles.downloadPDF}>
                <a 
                    href   = "Ariel-Pettyjohn_Resume.pdf"
                    target = "_blank"
                    rel    = "noreferrer"
                >
                    Download PDF
                </a>
            </small>

            <section className={styles.introduction}>
                <aside className={styles.sidebar}>
                    <h1>
                        <span>{firstName} {lastName}</span>
                        <span className="h2">{title}</span>
                    </h1>

                    <address className={styles.contact}>
                        <ContactInformation 
                            contactInformation = {contactInformation}
                        />
                    </address>
                </aside>

                <div className={styles.content}>
                    <img className={styles.photo} 
                        src = "/photo.png" 
                        alt = "Ariel Pettyjohn" 
                    />

                    <ul className={styles.summary}>
                        {summary.map((statement, index) => 
                            <li key={index}>{statement}</li>
                        )}
                    </ul>
                </div>
            </section>

            <main className={styles.main}>
                <aside className={styles.sidebar}>
                    <h2 className={styles.sectionHeading}>
                        Skills
                    </h2>

                    <dl className={styles.skills}>
                        {skillsets.map(({ category, skills }) => 
                            <>
                                <dt>{category}</dt> 
                                <dd>{skills}</dd>
                            </>
                        )}
                    </dl>
                </aside>

                <div className={styles.content}>
                    <section className={styles.experience}>
                        <h2 className={styles.sectionHeading}>
                            Experience
                        </h2>

                        {experiences.map(({ 
                            role, 
                            startDate, 
                            endDate, 
                            employer, 
                            location, 
                            highlights 
                        }) =>
                            <article key={role}>
                                <h3>
                                    <span>
                                        {role}
                                        <br />
                                        {startDate} &ndash; {endDate ?? "Present"}
                                    </span>
                                    
                                    <span className="h4">
                                        {employer}
                                        <br />
                                        {location}
                                    </span>
                                </h3>

                                <ul>
                                    {highlights.map((highlight) => 
                                        <li>{highlight}</li>
                                    )}
                                </ul>
                            </article>
                        )}
                    </section>

                    <section className={styles.education}>
                        <h2 className={styles.sectionHeading}>
                            Education
                        </h2>

                        {education.map(({ 
                            major, 
                            startDate, 
                            endDate, 
                            school, 
                            location 
                        }) =>
                            <article key={major}>
                                <h3>
                                    <span>
                                        {major}
                                        <br />
                                        {startDate} &ndash; {endDate ?? "Present"}
                                    </span>
                                    
                                    <span className="h4">
                                        {school}
                                        <br />
                                        {location}
                                    </span>
                                </h3>
                            </article>
                        )}
                    </section>
                </div>
            </main>
        </section>
    );
}