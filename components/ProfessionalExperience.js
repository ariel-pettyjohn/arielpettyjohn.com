import React from 'react';

import List    from './List';
import Clients from './Clients';

function ProfessionalExperience ({ 
    beginDate, 
    endDate, 
    role, 
    organization, 
    location,
    summary,
    clients,
    skills,
    achievements 
}) {
    return (
        <article className='ProfessionalExperience'>
            <header className='ProfessionalExperience__header'>
                <h4 className='ProfessionalExperience__heading'>
                    {role ? <>{role}&nbsp;|&nbsp;</> : null}
                    <span className='organization'>{organization}</span>
                </h4>               

                <div className='ProfessionalExperience__subheading'>
                    <span className='dates'>
                        {beginDate}&nbsp;&ndash;&nbsp;{endDate}
                    </span>

                    <span className='location'>{location}</span>
                </div>
            </header>

            <div className='ProfessionalExperience__content'>
                {summary ? (
                    <section className='summary'>
                        {summary}{clients ? (
                            <Clients 
                                clients           = {clients}
                                isCurrentPosition = {endDate === 'Present'}
                            />
                        ) : null}    
                    </section>
                ) : null}

                {skills ? (
                    <section className='skills'>
                        <h5>Key Skills:</h5>&nbsp;<List 
                            listItems      = {skills}
                            commaSeparated = {true}
                        />
                    </section>
                ) : null}
                
                <section className='achievements'>
                    <h5>Achievements</h5>
                        
                    <List listItems={achievements} />
                </section>
            </div> 
        </article>
    );
}

export default ProfessionalExperience;