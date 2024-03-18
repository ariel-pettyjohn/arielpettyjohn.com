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
            <h3>
                <span>
                    {role}
                    <br />
                    {startDate} &ndash; {endDate ?? "Present"}
                </span>
                
                <span className="h4">
                    {employer}
                    <br />
                    {location}
                </span>
            </h3>

            <ul>
                {highlights.map((highlight) => 
                    <li>{highlight}</li>
                )}
            </ul>
        </article>
    );
}