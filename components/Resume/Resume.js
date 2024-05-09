import Header     from '../Header/Header';
import Summary    from '../Summary/Summary';
import Skills     from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Section    from '../Section/Section';
import Aside      from "../Aside/Aside";

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
            <div className={styles.inner}>
                <div className={styles.introduction}>
                    <Header 
                        firstName       = {firstName}
                        lastName        = {lastName}
                        title           = {title}
                        location        = {location}
                        pointsOfContact = {pointsOfContact}
                    />

                    <Section className={styles.profile}>
                        <img className={styles.photo} 
                            src = {photo} 
                            alt = {`${firstName} ${lastName}`}
                        />

                        <Summary summary={summary} />
                    </Section>
                </div>

                <div className={styles.main}>
                    <Aside className={styles.skills} heading="Skills">
                        <Skills skillsets={skillsets} />
                    </Aside>

                    <div className={styles.content}>
                        <Section 
                            className = {styles.experience}
                            heading   = "Experience"
                        >
                            <Experience experiences={experiences} />
                        </Section>

                        <Section 
                            className = {styles.education}
                            heading   = "Education"
                        >
                            <span className={styles.corner}></span>
                            
                            <Experience experiences={education} />
                        </Section>
                    </div>
                </div>
            </div>
        </main>
    );
}