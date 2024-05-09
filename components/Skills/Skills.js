import React from "react";

export default function Skills ({ skillsets }) {
    return (
        <dl>
            {skillsets.map(({ category, skills }, index) => 
                <React.Fragment key={index}>
                    <dt>{category}</dt> 
                    <dd>{skills}</dd>
                </React.Fragment>
            )}
        </dl>
    );
}