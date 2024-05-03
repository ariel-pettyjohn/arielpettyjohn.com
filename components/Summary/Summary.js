import styles from "./Summary.module.scss";

export default function Summary ({ summary }) {
    return (
        <ul className={styles.Summary}>
            {summary.map((statement, index) => 
                <li key={index}>{statement}</li>
            )}
        </ul>
    );
}