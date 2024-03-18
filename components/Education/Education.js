export default function Education ({ education }) {
    return education.map(({ 
        major, 
        startDate, 
        endDate, 
        school, 
        location 
    }) =>
        <article key={major}>
            <h3 className="h6">
                <span>
                    {major}
                </span>
                
                <span className="text--small">
                    {school}, {startDate} &ndash; {endDate ?? "Present"}
                </span>
            </h3>
        </article>
    );
}