import './Services.css'
import React from 'react'
import c from '../Services/c-prog.png'
import java from '../Services/java-prog.png'
import html from '../Services/html.png'
import css from '../Services/css.png'
import bootstrap from '../Services/bootstrap.png'
import firebase from '../Services/firebase.png'
import flask from '../Services/flask.png'
import mysql from '../Services/mysql.png'
import react from '../Services/react.png'
import js from '../Services/javascript.jpg'
import py from '../Services/python-prog.png'

function Services() {
    return (
        <div className='services-page'>
            <h1 className='services-heading'> My Skills </h1>
            <h2 className='services-subheading'>--what i know--</h2>
            <div className='services-body'>
                <div className='skill-card'>
                    <div className='skill-card-body'>
                        <div className='technical-skills'>
                            <div className='programming-languages'>
                                <h3>Programming Languages...</h3>
                                <li><h3>C----------80%</h3>
                                <span className='skill-bar'><span className='skill-c'></span></span>
                                </li>
                                <li><h3>Python----------60%</h3>
                                    <span className='skill-bar'><span className='skill-python'></span></span>
                                </li>
                                <li><h3>Java----------60%</h3>
                                    <span className='skill-bar'><span className='skill-java'></span></span>
                                </li>
                            </div>
                        </div>
                        <div className='web-development'>
                            <h3>Web Development tootls...</h3>
                            <li><h3>html----------80%</h3>
                                <span className='skill-bar'><span className='skill-html'></span></span>
                            </li>
                            <li><h3>css----------70%</h3>
                                <span className='skill-bar'><span className='skill-css'></span></span>
                            </li>
                            <li><h3>Bootstrap----------50%</h3>
                                <span className='skill-bar'><span className='skill-bootstrap'></span></span>
                            </li>
                            <li><h3>javascript----------60%</h3>
                                <span className='skill-bar'><span className='skill-javascript'></span></span>
                            </li>
                            <li><h3>React JS----------60%</h3>
                                <span className='skill-bar'><span className='skill-reactjs'></span></span>
                            </li>
                            <li><h3>Next JS----------40%</h3>
                                <span className='skill-bar'><span className='skill-nextjs'></span></span>
                            </li>
                            <li><h3>Tailwind CSS----------40%</h3>
                                <span className='skill-bar'><span className='skill-tailwind'></span></span>
                            </li>
                        </div>
                        <div className='database'>
                            <h3>Database tools...</h3>
                            <li><h3>MySQL----------60%</h3>
                                <span className='skill-bar'><span className='skill-mysql'></span></span>
                            </li>
                            <li><h3>Firebase----------30%</h3>
                                <span className='skill-bar'><span className='skill-firebase'></span></span>
                            </li>
                        </div>
                        <div className='extra'>
                            <li><h3>Machine Learning----------30%</h3>
                                <span className='skill-bar'><span className='skill-ml'></span></span>
                            </li>
                        </div>   
                    </div>
                </div>
                <div className='skills-logo'>
                    
                    <img className='skills-logo-image' src={c} alt='c'/>
                    <img className='skills-logo-image' src={java} alt='java'/>
                    <img className='skills-logo-image' src={py} alt='python'/>
                    <img className='skills-logo-image' src={firebase} alt='firebase'/>
                    <img className='skills-logo-image' src={mysql} alt='mysql'/>
                    <img className='skills-logo-image' src={html} alt='html'/>
                    <img className='skills-logo-image' src={css} alt='css'/>
                    <img className='skills-logo-image' src={bootstrap} alt='bootstrap'/>
                    <img className='skills-logo-image' src={react} alt='react'/>                    
                </div>
            </div>
        </div>
    )
}

export default Services;