import './Home.css'
import React from 'react'
import dp from '../Home/dp-min.png'

function Home () {
    return(
        <div className='landing-page'>
            <div className='landing-profile-picture'>
                <img className='profile-picture' src={dp} alt='Profile Picture' />
            </div>
            <div className='landing-page-text'>
                <h3 className='landing-h3'>Hi There,</h3>
                <h1 className='landing-h1'>I am <div className='landing-h1-fancy'> Tuhin Mukherjee </div></h1>
                <p className='landing-p'>My current <span className='landing-p-fancy'>objective </span>is to achieve a <span className='landing-p-fancy'>responsible position </span>in an IT industry where I can <span className='landing-p-fancy'>continue growing</span> my technical skills 
and explore myself more efficiently. I am also<span className='landing-p-fancy'> focused on learning upcoming technologies</span> and excited to work on them 
while being resourceful to the company.</p>
                <p className='landing-p'> B.Tech(CSE) <span className='landing-p-fancy'> || </span> Front-end Web Developer <span className='landing-p-fancy'> || </span> Competitive Coder <span className='landing-p-fancy'> || </span> Tech Enthusisat <span className='landing-p-fancy'> || </span> ML Abecedarian </p>
                <button className='resume-btn'><a target='_blank' href='https://drive.google.com/file/d/1IHrCE6e4ebzH31Izq0VizDEj2Qyli4xN/view?usp=sharing'>Resume</a></button>
            </div>
        </div>
    )
}

export default Home;