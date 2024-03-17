import styles from './ContactInformation.module.css';

export default function ContactInformation ({ location, pointsOfContact }) {
    return (
        <address className={styles.ContactInformation}>
            <span className={styles.location}>
                <span className={styles.text}>
                    {location}
                </span> 
                
                <img 
                    className = {styles.icon}
                    src       = "location.png"
                    alt       = {location}
                />
            </span>
            
            {pointsOfContact.map(({ 
                href          = null, 
                externalLink  = false, 
                text, 
                src
            }) => 
                <a 
                    className = {styles.pointOfContact}
                    href      = {href}
                    target    = {externalLink ? "_blank"     : "_self"}
                    rel       = {externalLink ? "noreferrer" : null}
                >
                    <span className={styles.text}>{text}</span> 
                    <img className={styles.icon} src={src} alt={text} />
                </a>
            )}
        </address>
    );
}