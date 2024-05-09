import styles from "./Experience.module.scss";

export default function Experience ({ experiences }) {
    return experiences.map(({ 
        major,
        role, 
        startDate, 
        endDate: _endDate, 
        employer,
        school,
        highlights,
        projects
    }) => {
        const endDate      = _endDate ?? "Present";
        const organization = employer || school;
        const className    = projects ? styles.projects : styles.highlights;

        return (
            <article className={styles.Experience} key={role}>
                <header>
                    <h3 className="h6">{major || role}</h3>

                    <span className="text--small">
                        {organization}, {startDate} &ndash; {endDate}
                    </span>
                </header>

                <ul className={className}>
                    {projects ? projects.map(({ project, highlights }, index) => 
                        <li className={styles.project} key={index}>
                            <header>{project}</header> 
                                
                            <ul className={styles.highlights}>
                                {highlights.map((highlight, index) =>
                                    <li key={index}>{highlight}</li>
                                )}
                            </ul>
                        </li>
                    ) : highlights.map((achievement, index) => 
                        <li key={index}>{achievement}</li>
                    )}
                </ul>
            </article>
        );
    });
}