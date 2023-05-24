import React from 'react';

import List from './List';

function Clients ({ clients, isCurrentPosition }) {
    const clientText = isCurrentPosition 
        ? 'Past and present clients include' 
        : 'Clients included';
    
    const clientList = <List listItems={clients} commaSeparated={true} />;

    return <>&nbsp;<span>{clientText}</span>&nbsp;{clientList}</>;
}

export default Clients;