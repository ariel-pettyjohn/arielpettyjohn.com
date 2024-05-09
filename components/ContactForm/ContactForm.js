import { useForm, ValidationError } from "@formspree/react";

import styles from "./ContactForm.module.scss";

export default function ContactForm() {
    const contactFormID = process.env.NEXT_PUBLIC_CONTACT_FORM_ID;

    const [state, handleSubmit] = useForm(contactFormID);

    const { succeeded, errors, submitting} = state;

    return (
        <form className={styles.ContactForm} onSubmit={handleSubmit}>
            {succeeded ? (
                <p className={styles.thanks}>Thanks for your message!</p>
            ) : null}

            <div className={styles.row}>
                <label className={styles.field} htmlFor="name">
                    <span className={styles.label}>Name</span>

                    <input 
                        id        = "name"
                        type      = "name"
                        name      = "name"
                    />
                
                    <ValidationError
                        prefix = "Name"
                        field  = "name"
                        errors = {errors}
                    />
                </label>    
                
                <label className={styles.field} htmlFor="email">
                    <span className={styles.label}>Email Address</span>

                    <input 
                        id        = "email"
                        type      = "email"
                        name      = "email"
                    />
                
                    <ValidationError
                        prefix = "Email"
                        field  = "email"
                        errors = {errors}
                    />
                </label>    
            </div>
            
            <label className={styles.field} htmlFor="message">
                <span className={styles.label}>Message</span>
                
                <textarea 
                    className = {styles.message}
                    id        = "message"
                    name      = "message"
                />

                <ValidationError
                    prefix = "Message"
                    field  = "message"
                    errors = {errors}
                />
            </label>
            
            <button 
                className = {styles.button}
                type      = "submit"
                disabled  = {submitting}
            >
                Submit
            </button>

            <ValidationError errors={errors} />
        </form>
    );
}
