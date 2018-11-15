import React from 'react'
import ProgressBar from '../widgets/progress-bar.jsx'

function SkillsItem(items){
    return items.map((value, index)=>{

        return (
            <div className="skills-item">
                <p className="skills-item-title  primary-color">{value.name}</p>
                <div className="skills-item-progress">
                    <ProgressBar  value={value.skill} length={7}/>
                </div>
            </div>
        )
    })
}
function Skills(props){
    
    return (
        <div className="skills" id="skills">
            <h2 className="skills-title second-color size-title-section">{props.title}</h2>
            {
                props.skills.map((value,index)=>{
                    
                    return (
                    <div className="skills-section">
                        <h2 className="skills-section-title second-color size-subtitle-section">{value.section}</h2>
                        {SkillsItem(value.items)}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Skills;