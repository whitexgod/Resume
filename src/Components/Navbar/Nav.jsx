import './Nav.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    const [X, setX] = useState(false);
    const [toggleColorAbout, setToggleColorAbout] = useState("");
    const [toggleColorProjects, setToggleColorProjects] = useState("");
    const [toggleColorServices, setToggleColorServices] = useState("");
    const [toggleColorContact, setToggleColorContact] = useState("");
    
    function toggleAbout() {
        setX(!X); 
        setToggleColorAbout("green");
        setToggleColorServices("");
        setToggleColorProjects("");
        setToggleColorContact("");
    }
    function toggleProjects() {
        setX(!X); 
        setToggleColorAbout("");
        setToggleColorServices("");
        setToggleColorProjects("green");
        setToggleColorContact("");
    }
    function toggleServices() {
        setX(!X); 
        setToggleColorAbout("");
        setToggleColorServices("green");
        setToggleColorProjects("");
        setToggleColorContact("");
    }
    function toggleContact() {
        setX(!X); 
        setToggleColorAbout("");
        setToggleColorServices("");
        setToggleColorProjects("");
        setToggleColorContact("green");
    }
    function togglePortfolio() { 
        setToggleColorAbout("green");
        setToggleColorServices("");
        setToggleColorProjects("");
        setToggleColorContact("");
    }
    useEffect(()=>{
        togglePortfolio()
    },[])
    return (
        <div>
            <nav className='navbar'>
                <div className='title'>
                    <Link className='title-link' onClick={togglePortfolio} to='/'> Portfolio </Link>
                </div>
                <a href='#' onClick={() => { setX(!X) }} className='toggle-button'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
                <div className={`navbar-links ${X ? `active` : ``}`}>
                    <ul>
                        <li><Link className={`navbar-link${toggleColorAbout}`} onClick={toggleAbout} to='/'> About </Link></li>
                        <li><Link className={`navbar-link${toggleColorProjects}`} onClick={toggleProjects} to='/Projects'> Projects </Link></li>
                        <li><Link className={`navbar-link${toggleColorServices}`} onClick={toggleServices} to='/Services'> Skills </Link></li>
                        <li><Link className={`navbar-link${toggleColorContact}`} onClick={toggleContact} to='/Contact'> Contact </Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;