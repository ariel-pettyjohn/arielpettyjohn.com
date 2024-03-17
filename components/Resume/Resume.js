import ContactInformation from '../ContactInformation/ContactInformation';

import Experience from '../Experience/Experience';

import styles from './Resume.module.css';

function Education ({ education }) {
    return (
        <section className={styles.education}>
            <h2>Education</h2>

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
    );
}

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
            <small className={styles.downloadPDF}>
                <a 
                    href   = {pdf}
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

                    <ContactInformation 
                        location        = {location}
                        pointsOfContact = {pointsOfContact}
                    />
                </aside>

                <div className={styles.content}>
                    <img className={styles.photo} 
                        src = {photo} 
                        alt = {`${firstName} ${lastName}`}
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
                    <h2>Skills</h2>

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
                    <Experience experiences={experiences} />

                    <Education education={education} />
                </div>
            </main>
        </section>
    );
}