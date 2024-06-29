import React from 'react';
import ChatLead from '../assets/ChatLead.jpeg'
import CloudKnight from '../assets/cloudknight.jpeg';

const projectData = [
    { id: 1, title: 'Chatbot Leads AI', description: 'Chatbot Leads AI is a smart, cutting-edge solution for optimizing lead generation and customer engagement. It combines AI-driven chatbot interactions with real-time user intervention and comprehensive tracking, enabling businesses to efficiently manage conversations, capture valuable leads, and deliver exceptional customer experiences.', image: ChatLead },
    { id: 2, title: 'Cloud Knight Portfolio', description: "I designed and developed a comprehensive portfolio website for a Site Reliability Engineer (SRE) and DevOps engineer. This project involved creating an engaging, user-friendly platform that effectively showcases the engineer's skills, experience, and key projects.", image: CloudKnight },
    
    // Add more project objects as needed
];

function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="card-left">
                            <h2>Project {project.id}</h2>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="card-right">
                            <div className="wide"></div>
                            <img src={project.image} alt="An Image of the Project" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
