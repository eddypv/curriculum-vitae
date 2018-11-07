import React from 'react'
import photo from '../../images/photo.png'
function Header(props){
    return (
        <header className="header">
            <img src={photo} alt="Eddy Perez" className="header-photo"/>
            <div className="header-section-name">
                <h2 className="header-name"></h2>
            </div>
        </header>
    )
}

export default Header