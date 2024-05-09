import Contact from '../Contact/Contact';

import styles from "./ResumeHeader.module.scss";

export default function ResumeHeader({ 
    firstName, 
    lastName, 
    title, 
    location, 
    pointsOfContact
}) {
    return (
        <header className={styles.Header}>
            <small className={styles.corner}></small>
            
            <div className={styles.inner}>
                <h1 className={styles.masthead}>
                    <span>{firstName} {lastName}</span>

                    <span className={styles.separator}>/</span>
                    
                    <span className={styles.title}>{title}</span>
                </h1>

                <Contact 
                    location        = {location}
                    pointsOfContact = {pointsOfContact}
                />
            </div>
        </header>
    );
}