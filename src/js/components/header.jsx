import React from 'react'
import photo from '../../images/photo.png'

function Header(props){
    return (
        <header className="header">
            <div className="header-section-title">
                <h1 className="header-title primary-color">Hoja de Vida</h1>
            </div>
            <div className="header-section-photo">
                <img src={photo} alt={props.name} title={props.name} className="header-photo"/> 
            </div>
            <div className="header-section-name">
                <h2 className="header-name primary-color">{props.name}</h2>
                <h3 className="header-profession second-color">{props.profession}</h3>
            </div>
            <div className="header-section-info">
                <p className="header-contact second-color">Contacto</p>
                <a href={`tel:${props.code_country_phone}${ props.phone }`}className="header-phone primary-color">{props.phone}</a>
                <a href={`mailto:${props.email}`}className="header-email primary-color">{props.email}</a>
                <p className="header-country primary-color">{props.city} - {props.country}</p>
            </div>
        </header>
    )
}

export default Header