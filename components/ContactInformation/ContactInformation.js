import styles from './ContactInformation.module.css';

export default function ContactInformation ({ contactInformation }) {
    return (
        <div>
            <span>
                <span className={styles.text}>
                    Seattle, Washington
                </span> 
                
                <img 
                    className = {styles.icon}
                    src       = "location.png"
                    alt       = "Seattle, Washington"
                />
            </span>
            
            {contactInformation.map(({ 
                href          = null, 
                externalLink  = false, 
                text, 
                src
            }) => externalLink ? (
                <a 
                    className = {styles.ContactInformation}
                    href      = {href}
                    target    = "_blank"
                    rel       = "noreferrer"
                >
                    <span className={styles.text}>{text}</span> 
                    <img className={styles.icon} src={src} alt={text} />
                </a>
            ) : (
                <a className={styles.ContactInformation} href={href}>
                    <span className={styles.text}>{text}</span> 
                    <img className={styles.icon} src={src} alt={text} />
                </a>
            ))}
        </div>
    );
}