export default function Skills ({ skillsets }) {
    return (
        <dl>
            {skillsets.map(({ category, skills }) => 
                <>
                    <dt>{category}</dt> 
                    <dd>{skills}</dd>
                </>
            )}
        </dl>
    );
}