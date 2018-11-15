import React from 'react'

function getYear(props){
    if(props.time.from !== props.time.to){
        return `${props.time.from} - ${props.time.to}`
    }else if(props.time.from){
        return props.time.from
    }else if(props.time.to) {
        return props.time.to
    }
    return "";
    
}
function SectionItem(props){
    return(
        <div className="section-item">
            <div className="section-item-element">
                <div className="section-item-line">

                </div>
                <p className="section-item-year second-color">
                    { getYear(props)}
                </p>
            </div>
            <div className="section-item-element">
                <p className="section-item-institution primary-color">
                    {props.institution}
                </p>
                <p className="section-item-detail primary-color">
                    {props.detail}
                </p>
            </div>
        </div>
    )
}
export default SectionItem 