import styles from "./SectionHeader.module.scss";

export default function SectionHeader ({ children }) {
    return (
        <header className={styles.sectionHeader}>
            <h2 className="h5">{children}</h2>
        </header>
    );
}