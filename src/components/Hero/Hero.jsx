import React from 'react'
import "./Hero.css"
function Hero() {
    return (
        <div className='hero'>
            <div className="hero-wrapper">
                <div className="hero-content">
                <h1>Collaborative Project Incubator</h1>
                <p>Helping Convert Ideas to Real World Projects</p>
                <div className="hero-controls">
                    <a href="#" className='btn join-btn'>Join</a>
                    <a href="#" className='btn contact-btn'>Contact</a>
                </div>

                
                </div>
                <img src="/illustration.svg" alt=""  className='illustration'/>
            </div>

            <img src="/wave.svg" alt="" className='wave'/>
        </div>
    )
}

export default Hero
