import React from "react";

import styles from "./Skills.module.scss";

export default function Skills ({ skillsets }) {
    return (
        <dl>
            {skillsets.map(({ category, skills }, index) => 
                <React.Fragment key={index}>
                    <dt className={styles.category}>{category}</dt> 
                    <dd>{skills}</dd>
                </React.Fragment>
            )}
        </dl>
    );
}