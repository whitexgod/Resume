import './Projects.css'
import React from 'react'
import listOfProjects from './listOfProjects'

function Projects() {
    
    function createCard(props) {
        return (
        <div className="Project-card-box">
          <div className="Project-card">
            <img className="card-img-top" src={props.image} alt="image"></img>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
            </div>
            <div class="card-body-a">
              <a href={props.url1} target="_blank" className="card-link">
                Github link
              </a><br/>
              { props.url2!=""? <a href={props.url2} target="_blank" className="card-link">Heroku app Link</a>: "" }
            </div>
          </div>
          </div>
        );
      }
    return(
        <div className='project-body'>
            <h1 className='projects-heading'>Projects</h1>
            <div className='projects'>
                {listOfProjects.map(createCard)}
            </div>
        </div>
    )
}

export default Projects;