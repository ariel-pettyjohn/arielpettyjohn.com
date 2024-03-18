export default function Education ({ education }) {
    return education.map(({ 
        major, 
        startDate, 
        endDate, 
        school, 
        location 
    }) =>
        <article key={major}>
            <h3>
                <span>
                    {major}
                    <br />
                    {startDate} &ndash; {endDate ?? "Present"}
                </span>
                
                <span className="h4">
                    {school}
                    <br />
                    {location}
                </span>
            </h3>
        </article>
    );
}