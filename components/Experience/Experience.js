export default function Experience ({ experiences }) {
    return experiences.map(({ 
        role, 
        startDate, 
        endDate, 
        employer, 
        location, 
        highlights 
    }) =>
        <article key={role}>
            <header>
                <h3 className="h6">{role}</h3>

                <span className="text--small">
                    {employer}, {startDate} &ndash; {endDate ?? "Present"}
                </span>
            </header>
            

            <ul>
                {highlights.map((highlight, index) => 
                    <li key={index}>
                        {highlight}
                    </li>
                )}
            </ul>
        </article>
    );
}