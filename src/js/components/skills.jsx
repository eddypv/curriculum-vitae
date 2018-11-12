import React from 'react'
import ProgressBar from '../widgets/progress-bar.jsx'
function Skills(props){
    return (
        <div className="skills">
            <h2 className="skills-title">{props.title}</h2>
            <div className="skills-section">
                <h2 className="skills-section-title">Title</h2>
                <div className="skills-item">
                    <p className="skills-item-title">Title</p>
                    <ProgressBar  value={5} length={7}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;