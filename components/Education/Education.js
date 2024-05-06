import styles from "./Education.module.scss";

export default function Education ({ education }) {
    return education.map(({ 
        major, 
        startDate, 
        endDate, 
        school,
        highlights
    }) =>
        <article className={styles.Education} key={major}>
            <header>
                <h3 className="h6">
                    {major}
                </h3>
                
                <span className="text--small">
                    {school}, {startDate} &ndash; {endDate ?? "Present"}
                </span>
            </header>

            <ul>
                    {highlights.map((highlight, index) =>
                        <li key={index}>{highlight}</li>
                    )}
                </ul>
        </article>
    );
}