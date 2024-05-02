import Contact    from '../Contact/Contact';
import Summary    from '../Summary/Summary';
import Skills     from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education  from '../Education/Education';

import styles from './Resume.module.scss';

export default function Resume ({ 
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
        <main className={styles.Resume}>
            <div className={styles.introduction}>
                <header className={styles.header}>
                    <small className={styles.corner}></small>
                    
                    <div className={styles.header__inner}>
                        <h1 className={`h3 ${styles.masthead}`}>
                            <span>{firstName} {lastName}</span>

                            <span className={styles.separator}>|</span>
                            
                            <span className="h4">{title}</span>
                        </h1>

                        <Contact 
                            location        = {location}
                            pointsOfContact = {pointsOfContact}
                        />
                    </div>
                </header>

                <section className={styles.profile}>
                    <img className={styles.photo} 
                        src = {photo} 
                        alt = {`${firstName} ${lastName}`}
                    />

                    <Summary summary={summary} />
                </section>
            </div>

            <div className={styles.main}>
                <aside className={styles.skills}>
                    <header className={styles.sectionHeader}>
                        <h2 className="h5">Skills</h2>
                    </header>

                    <Skills skillsets={skillsets} />
                </aside>

                <div className={styles.content}>
                    <section className={styles.experience}>
                        <header className={styles.sectionHeader}>
                            <h2 className="h5">Experience</h2>
                        </header>
                        
                        <Experience experiences={experiences} />
                    </section>

                    <section className={styles.education}>
                        <header className={styles.sectionHeader}>
                            <h2 className="h5">Education</h2>
                        </header>
                        
                        <Education education={education} />
                    </section>
                </div>
            </div>
        </main>
    );
}