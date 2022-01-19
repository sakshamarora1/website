import React from 'react'
import "./ProjectSection.css"


function ProjectCard({title}){
    return <div className="project-card">
        <h3>{title}</h3>
    </div>
}
function ProjectSection() {
    return (
        <div className='project-section'>
            <div className="project-section-container">
                <div className="project-section-header">
                    <h2>Projects</h2>
                </div>

                <div className="project-section-top">
                    <img src="/project_illustration.svg" alt="" />
                    <p className="project-section-subheadline">
                    Projects can be intimidating, especially when you can see the source. 
But it doesn’t matter if you are a beginner or a pro, there’s always something you can help with.
Admins and Mentors at Builtree are here to help you navigate through the project and find where you can make a difference.
                    </p>
                </div>

                <div className="open-source-header">
                    <h3>We <span className='heart'>❤️ </span>Open Source</h3>
                    <p className="open-source-headline">
and strive to keep most of projects open to everyone.
                    </p>
                </div>

                <div className="projects">
                <ProjectCard title={"Simulate"}/>
                <ProjectCard title={"Handwrite"}/>
                <ProjectCard title="Project 3"/>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection
