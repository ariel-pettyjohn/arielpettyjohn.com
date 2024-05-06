import styles from "./Experience.module.scss";

export default function Experience ({ experiences }) {
    return experiences.map(({ 
        role, 
        startDate, 
        endDate, 
        employer, 
        highlights,
        isAgency = false
    }) =>
        <article className={styles.experience} key={role}>
            <header>
                <h3 className="h6">{role}</h3>

                <span className="text--small">
                    {employer}, {startDate} &ndash; {endDate ?? "Present"}
                </span>
            </header>

            <ul className={isAgency ? styles.agencyHighlights : null}>
                {isAgency ? highlights.map((highlight, index) => 
                    <li className={styles.agencyHighlight} key={index}>
                        <dl>
                            <dt>{highlight.client}</dt> 
                            
                            <dd>
                                <ul className={styles.agencyAchievements}>
                                    {highlight.achievements.map((achievement, index) =>
                                        <li key={index}>{achievement}</li>
                                    )}
                                </ul>
                            </dd>
                        </dl>
                    </li>
                ) : highlights.map((highlight, index) => 
                    <li key={index}>
                        {highlight}
                    </li>
                )}
            </ul>
        </article>
    );
}