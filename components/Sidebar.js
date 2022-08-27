import React from 'react';

import Skill from './Skill';
import List  from './List';    

function Sidebar ({ contact, skills, interests, profile }) {    
    const { 
        name,
        email, 
        phone, 
        mailingName, 
        mailingAddress, 
        mailingCity, 
        mailingState, 
        mailingZip,
        linkedInURL,
        linkedInName 
    } = contact;

    const skillObjects = skills.map((skill, index) => ({
        skill: skill,
        index: index
    }));

    skillObjects.sort((object1, object2) => {
        return object1.skill.localeCompare(object2.skill);
    });

    return (
        <aside className='sidebar'>
            <h1>{name}</h1>

            <section className='profile'>
                <h2>Profile</h2>

                <p>{profile}</p>
            </section>

            <section className='contact'>
                <h2>Contact</h2>

                <table>
                    <tbody>
                        <tr>
                            <th>Email:</th>

                            <td className='contactInformation'>
                                <a href={`${email}`}>{`${email}`}</a>
                            </td>
                        </tr>

                        <tr>
                            <th>Phone:</th>
                            
                            <td className='contactInformation'>
                                <a href={`${phone}`}>{`${phone}`}</a>
                            </td>
                        </tr>

                        <tr>
                            <th>LinkedIn:</th>
                            
                            <td className='contactInformation'>
                                <a 
                                    href   = {`${linkedInURL}`}
                                    target = "_blank"
                                    rel    = "noreferrer"
                                >
                                    {linkedInName}
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h3>Mailing Address</h3>

                <address>
                    {mailingName}
                    <br />
                    {mailingAddress}
                    <br />
                    {mailingCity}, {mailingState} {mailingZip}
                </address>
            </section>

            <section className='skills'>
                <h2>Skills</h2>
                
                <div className='skills__inner'>
                    {skillObjects.map(({ index, skill }) =>                        
                        <Skill 
                            key                = {index}
                            index              = {index}
                            skillObjectsLength = {skillObjects.length}
                        >
                            {skill}
                        </Skill>
                    )}
                </div>
            </section>

            <section className='interests'>
                <h2>Interests</h2>

                <List listItems={interests} />
            </section>
        </aside>
    );
};

export default Sidebar;