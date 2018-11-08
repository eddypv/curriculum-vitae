import React from 'react'
import SectionItem from './section-item.jsx'

function SectionInfo(props){
    return (
        <div className="section">
            <h2 className="section-title second-color">{props.title}</h2>
            <div className="section-body">
                {
                    props.items.map((item)=>{
                        return <SectionItem {...item} />
                    })
                }
            </div>
        </div>
    )
}

export default SectionInfo;