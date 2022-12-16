import React from 'react'
import './WorkCardStyle.css'

const Workcard = ({imgsrc, title, text, view, source}) => {
    return (
        <div className='project-card'>
            <img src={imgsrc} alt='images'/>
            <h2 className='project-tile'>{title}</h2>
            <div className='pro-details'>
                <p>{text}</p>
                <div className='pro-btns'>
                    <a href={view} target="_blank" rel="noreferrer" className='btn'>View</a>
                    <a href={source} target="_blank" rel="noreferrer" className='btn'>Source</a>
                </div>
            </div>
        </div>
    )
}

export default Workcard
