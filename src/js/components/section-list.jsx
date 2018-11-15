import React from 'react'

function SectionList(props){
    return (
        <div className="section-list" id={props.section_id}>
            <h2 className="section-list-title section-title second-color">{props.title}</h2>
            {
                props.items.map((item, index)=>{
                    return (
                        <ul className="section-list-body">
                            <li className="section-list-item detail-text primary-color">{item}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default SectionList;