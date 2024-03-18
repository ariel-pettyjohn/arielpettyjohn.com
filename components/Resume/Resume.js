import Contact    from '../Contact/Contact';
import Summary    from '../Summary/Summary';
import Skills     from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education  from '../Education/Education';

import styles from './Resume.module.scss';

export default function Resume ({ 
    pdf,
    firstName, 
    lastName,
    photo,
    title, 
    location,
    pointsOfContact, 
    summary, 
    skillsets, 
    experiences, 
    education 
}) {
    return (
        <section className={styles.Resume}>
            <section className={styles.introduction}>
                <aside className={styles.sidebar}>
                    <h1 className={`h2 ${styles.masthead}`}>
                        <span>{firstName} {lastName}</span>
                        <span className="h3">{title}</span>
                    </h1>

                    <Contact 
                        location        = {location}
                        pointsOfContact = {pointsOfContact}
                    />
                </aside>

                <div className={styles.content}>
                    <img className={styles.photo} 
                        src = {photo} 
                        alt = {`${firstName} ${lastName}`}
                    />

                    <Summary summary={summary} />
                </div>
            </section>

            <main className={styles.main}>
                <aside className={styles.sidebar}>
                    <h2 className="h5">Skills</h2>

                    <Skills skillsets={skillsets} />
                </aside>

                <div className={styles.content}>
                    <section className={styles.experience}>
                        <h2 className="h5">Experience</h2>
                        
                        <Experience experiences={experiences} />
                    </section>

                    <section className={styles.education}>
                        <h2 className="h5">Education</h2>
                        
                        <Education education={education} />
                    </section>
                </div>
            </main>

            <small className={styles.downloadPDF}>
                <a 
                    href   = {pdf}
                    target = "_blank"
                    rel    = "noreferrer"
                >
                    Download PDF
                </a>
            </small>
        </section>
    );
}