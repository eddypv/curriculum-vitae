import React from 'react'
import Section from './section-info.jsx'
function Body(props){
    return(
        <div className="body">
            <Section items={props.education} title="Educación"/>
        </div>    
    )
}
export default Body;