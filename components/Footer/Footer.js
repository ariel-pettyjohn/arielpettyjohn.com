import { forwardRef } from "react";

import ContactForm from "../ContactForm/ContactForm";

import { getCurrentYear } from '../../util';

import styles from "./Footer.module.scss";

function Footer (_, ref) {
    return (
        <footer className={styles.Footer} ref={ref}>
            <div className={styles.inner}>
                <section className={styles.getInTouch}>
                    <header>
                        <h2 className="h5">Get in Touch</h2>
                    </header>
                    
                    <ContactForm />
                </section>
                
                <span className="text--small">
                    Copyright &copy; {getCurrentYear()} Ariel Pettyjohn 
                </span>
            </div>
        </footer>
    );
}

export default forwardRef(Footer);