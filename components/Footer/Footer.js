import ContactForm from "../ContactForm/ContactForm";

import { getCurrentYear } from '../../util';

import styles from "./Footer.module.scss";

export default function Footer () {
    return (
        <footer className={styles.Footer}>
            <section className={styles.getInTouch}>
                <header>
                    <h2 className="h5">Get in Touch</h2>
                </header>
                
                <ContactForm />
            </section>
            
            <span className={styles.copyright}>
                Copyright &copy; {getCurrentYear()} Ariel Pettyjohn 
            </span>
        </footer>
    );
}