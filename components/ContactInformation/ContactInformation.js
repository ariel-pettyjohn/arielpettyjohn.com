import styles from './ContactInformation.module.css';

export default function ContactInformation ({ 
    className: _className = '',
    href                  = null, 
    externalLink          = false, 
    text, 
    src
}) {
    const className = `${styles.ContactInformation} ${_className}`;
    const innerHTML = (
        <>
            <span className={styles.text}>{text}</span> 
            <img className={styles.icon} src={src} alt={text} />
        </>
    );
    return href && externalLink ? (
        <a 
            className = {className}
            href      = {href}
            target    = "_blank"
            rel       = "noreferrer"
        >
            {innerHTML}
        </a>
    ) : href ? (
        <a className={className} href={href}>{innerHTML}</a>
    ) : (
        <span className={className}>{innerHTML}</span>
    );
}