import React from 'react';

import Head from 'next/head';

import Sidebar                from '../components/Sidebar';
import List                   from '../components/List';
import ProfessionalExperience from '../components/ProfessionalExperience';

import resume from '../resume.json';

export default function Resume () {
    const {
        contact, 
        skills, 
        interests, 
        profile, 
        professionalSummary,
        professionalExperience,
        academicExperience, 
    } = resume;
 
    return (
        <>
            <Head>
                <title>Ariel Pettyjohn</title>

                <meta name='description' content='Ariel Pettyjohn' />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='ResumeContainer'>
                <section className='Resume'>
                    <Sidebar 
                        contact             = {contact}
                        skills              = {skills}
                        interests           = {interests}
                        profile             = {profile}
                        professionalSummary = {professionalSummary}
                    />

                    <div className='content'>
                        <h1>Web Application Engineer + Developer</h1>

                        <section className='experiences'>
                            <h2 >Experience</h2>

                            <section className='professionalExperiences'>
                                {professionalExperience.map((experience, index) => 
                                    <ProfessionalExperience 
                                        key          = {index}
                                        role         = {experience.role}
                                        organization = {experience.organization}
                                        beginDate    = {experience.beginDate}
                                        endDate      = {experience.endDate}
                                        location     = {experience.location}
                                        summary      = {experience.summary}
                                        clients      = {experience.clients}
                                        skills       = {experience.skills}
                                        achievements = {experience.achievements}
                                    /> 
                                )}
                            </section>

                            <section className='academicExperiences'>
                                <h3>Academic Experience</h3>

                                {academicExperience.map((experience, index) => 
                                    <ProfessionalExperience 
                                        key          = {index}
                                        organization = {experience.organization}
                                        beginDate    = {experience.beginDate}
                                        endDate      = {experience.endDate}
                                        location     = {experience.location}
                                        achievements = {experience.achievements}
                                    /> 
                                )}
                            </section>
                        </section>
                    </div>
                </section>

                <div className='underlay'></div>
            </div>
        </>
    )
}