import React from 'react';

function ListItem ({ commaSeparated, isLastItem, listItem }) {
    if (commaSeparated) {
        const punctuation = isLastItem ? <>.</>         : <>,&nbsp;</>;
        const conjunction = isLastItem ? <>and&nbsp;</> : null;
            
        return (
            <li className='List__item--commaSeparated'>
                {conjunction}{listItem}{punctuation}
            </li>
        );
    } else {
        return <li className='List__item'>{listItem}</li>;
    }
}

export default ListItem;