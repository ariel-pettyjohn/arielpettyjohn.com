export default function Summary ({ summary }) {
    return (
        <ul>
            {summary.map((statement, index) => 
                <li key={index}>{statement}</li>
            )}
        </ul>
    );
}