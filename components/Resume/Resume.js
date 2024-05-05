import Header     from '../Header/Header';
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
    education,
    //style
}) {
    return (
        <main className={styles.Resume} /*style={style}*/>
            <div className={styles.inner}>
                <div className={styles.introduction}>
                    <Header 
                        firstName       = {firstName}
                        lastName        = {lastName}
                        title           = {title}
                        location        = {location}
                        pointsOfContact = {pointsOfContact}
                    />

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
                            <span className={styles.corner}></span>

                            <header className={styles.sectionHeader}>
                                <h2 className="h5">Education</h2>
                            </header>
                            
                            <Education education={education} />
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}