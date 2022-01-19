import React from 'react'
import "./Card.css"
function Card({icon,title,description}) {
    return (
        <div className='card'>
            <div className="card-icon">
                <img src={icon} alt="card-icon" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card
