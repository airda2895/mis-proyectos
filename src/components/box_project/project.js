import React from "react";
import './styles.css';

const Project = (props) => {
    return (
        <div className="box-project">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p><a href={props.site}>Página web</a></p>
            <p><a href={props.githubUrl}>Github</a></p>
        </div>
    )    
}   

export default Project;