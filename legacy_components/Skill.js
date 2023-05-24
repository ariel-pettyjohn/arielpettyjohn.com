import React from 'react';

function Skill ({ index, children, skillObjectsLength }) {
    const marginRight  = (
        100 
        * (0.5 - ((skillObjectsLength - index) 
            * (0.5 / skillObjectsLength)))
    );

    return (
        <div className='Skill'>
            <div 
                className = 'Skill__level'
                style     = {{ marginRight: `${marginRight}%` }}
            >
                {children}
            </div>
        </div>
    );
};

export default Skill;