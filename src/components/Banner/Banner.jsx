import React from 'react'
import "./Banner.css"
function Banner() {
    return (
        <div className='banner'>
                <div className="banner-wrapper">
                    <h3>Having a eureka moment isn’t enough!</h3>
                    <p>Take help from experienced developers and give your idea a headstart.</p>
                    <div className="banner-controls">
                        <a href="#" className='idea-btn'>Submit an Idea</a>
                        <a href="#" className='checkout'>or checkout our other <strong>Projects↓</strong></a>
                    </div>

                    <img src="/idea.svg" alt=""  className='idea-bulb'/>
                </div>
        </div>
    )
}

export default Banner
