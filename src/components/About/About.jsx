import React from 'react'
import Card from '../Card/Card'
import "./About.css"

function About() {
    return (
        <div className='about'>
            <div className="section-container">
            <div className="section-header">
                <h3>ABOUT</h3>
            </div>
            <div className="section-headline">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
            

            <div className="about-section-area">
                <div className="about-section-card-content">
                    <h3>What is Builtree?</h3>
                    <p>Started by passionate developers who believe that the most effective way to learn any technical skill is by doing.

With project based learning as our core, we help developers gain skills and experience through existing projects or building things from scratch.

Follow this link to know more!</p>
                </div>

                <div className="about-section-logo">
                    <img src="/builtree.svg" alt="" />
                </div>

                <div className='about-section-illustration'>
                    <img src="/book_stack.svg" alt="" />
                </div>

                <div className="about-section-card-content">
                    <h3>Where can we add value?</h3>
                    <p>As much as building stuff is fun and rewarding, it is also difficult. 

Learning new technologies, multitask in development, find collaborators, maintaining the project for future and so much more is required to make a good idea successful.

We aim to assist you in all this and more!</p>
                </div>
                </div>

                <div className="join-section">
                    <div className="join-header">
                        <h3>Join To</h3>
                    </div>

                    <div className="join-cards">
                        <Card icon={"/gear.svg"} title="Acquire New Skills" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
                        <Card icon={"/community.svg"} title="Collaborate and Build" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
                        <Card icon={"/bulb.svg"} title="Turn Ideas into Products" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
