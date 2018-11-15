import React from 'react'
import Section from './section-info.jsx'
import Skill from './skills.jsx'
import SectionList from './section-list.jsx'
function Body(props){
    return(
        <div className="body">
            <Section items={props.education} title="Educación" section_id="education"/>
            <Skill title="Habilidades"  skills ={props.skills} />
            <Section items={props.experience} title="Experiencia"  section_id="experience"/>
            <SectionList title="Integraciones" items={props.integrations} section_id="integrations"/>
            <Section items={props.others} title="Otros"  section_id="others"/>
            <SectionList title="Reconocimientos" items={props.recognitions} section_id="recognitions"/>
        </div>    
    )
}
export default Body;