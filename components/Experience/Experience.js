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
            <h3 className="h6">
                <span>
                    {role}
                </span>
                
                <span className="text--small">
                    {employer}, {startDate} &ndash; {endDate ?? "Present"}
                </span>
            </h3>

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