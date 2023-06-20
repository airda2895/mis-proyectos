import React from "react";
import './styles.css';
import Project from "./project";

const ProjectsContainer = () => {
    const projectsDetails = [
        {title: 'Techollos', description: 'Página web que contiene errores, para prácticar software testing', site: 'https://adria-torres-webs.es/proyectos-demostrables/techollos/', githubUrl: 'https://github.com/airda2895/techollos'},
        {title: 'Mini juegos', description: 'Página web con 4 mini juegos con errores, para prácticar software testing', site: 'https://adria-torres-webs.es/proyectos-demostrables/mini-games/', githubUrl: 'https://github.com/airda2895/mini-games'},
        {title: 'Juego de escribir', description: 'Página web para practicar mecanografía', site: 'https://adria-torres-webs.es/proyectos-demostrables/typing-game/', githubUrl: 'https://github.com/airda2895/typing-game'}
    ]
    return (
        <div className="projects-container">
            {projectsDetails.map((project, i) => {
                return (
                    <Project key={i} title={project.title} description={project.description} site={project.site} githubUrl={project.githubUrl}/>
                )                
            })}
        </div>
    )    
}   

export default ProjectsContainer;