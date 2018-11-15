import React from 'react'
import Section from './section-info.jsx'
import Skill from './skills.jsx'
import SectionList from './section-list.jsx'
function Body(props){
    return(
        <div className="body">
            <Section items={props.education} title="Educación" />
            <Skill title="Habilidades"  skills ={props.skills} />
            <Section items={props.experience} title="Experiencia" />
            <SectionList title="Integraciones" items={props.integrations}/>
        </div>    
    )
}
export default Body;