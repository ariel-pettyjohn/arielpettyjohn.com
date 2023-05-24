import React from 'react';

import ListItem from './ListItem';

function List ({ listItems, commaSeparated }) {
    if (listItems) {
        return  (
            <ul className={commaSeparated ? 'List--commaSeparated' : 'List'}>
                {listItems.map((listItem, index) => 
                    <ListItem 
                        key            = {index}
                        index          = {index}
                        isLastItem     = {index === listItems.length - 1}
                        commaSeparated = {commaSeparated}
                        listItem       = {listItem}
                    />
                )}
            </ul>
        );
    }
}

export default List;