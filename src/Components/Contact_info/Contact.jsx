import "./Contact.css"
import React from 'react'
import github from '../Contact_info/github.png'
import linkedin from '../Contact_info/linkedin.png'

export default function Contact() {
    return (
        <>
        <div className="Contact-Page">
             <div className="contact-info">
                 <div className="card">
                     <i className="card-icon far fa-envelope"/>
                     <p>tuhinmukherjee.exams@gmail.com</p>
                 </div>
                 <div className="card">
                    <img className="card-icon" src={github} alt='github'/>
                     <p><a href="https://github.com/whitexgod" target="_blank">Github</a></p>
                 </div>
                 <div className="card">
                     <i className="card-icon fas fa-phone"/>
                     <p>+91 7003990436</p>
                 </div>
                 <div className="card">
                     <i className="card-icon fas fa-map-marker-alt"/>
                     <p>Bandel, West Bengal, India</p>
                 </div>
                 <div className="card">
                    <img className="card-icon" src={linkedin} alt='linkedin'/>
                     <p><a href="https://www.linkedin.com/in/tuhin-mukherjee-38376219b/" target="_blank">Linkedin</a></p>
                 </div>
             </div>
        </div>
        </>
    )
}
