import ContactForm from "../ContactForm/ContactForm";

import { getCurrentYear } from '../../util';

import styles from "./Footer.module.scss";

export default function Footer () {
    return (
        <footer className={styles.Footer}>
            <ContactForm />
            
            <span className={styles.copyright}>
                Copyright &copy; {getCurrentYear()} Ariel Pettyjohn 
            </span>
        </footer>
    );
}