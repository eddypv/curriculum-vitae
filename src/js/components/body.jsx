import React from 'react'
import Section from './section-info.jsx'
import Skill from './skills.jsx'
function Body(props){
    return(
        <div className="body">
            <Section items={props.education} title="Educación"/>
            <Skill title="Habilidades" />
        </div>    
    )
}
export default Body;